<script setup>
import {onMounted, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {ElMessage} from 'element-plus';
import {useI18n} from 'vue-i18n';
import axios from '../http/axios';
import Pageable from '../components/Pageable.vue';

const {t: $t} = useI18n();

const route = useRoute();
const router = useRouter();
const pageData = ref({});
const pageSize = ref(15);
const pageCurrNum = ref(1);
const value1 = ref([]);

// 多选 选中的元素
let selectedIds = []
let siftQueryList = {}
// 页面查询
const getResultList = (pageNum, pSize) => {
    pageSize.value = pSize || pageSize.value;
    pageCurrNum.value = pageNum || pageCurrNum.value;
    axios
        .get('/controller/results/list', {
            params: {
                projectId: route.params.projectId,
                page: pageCurrNum.value,
                pageSize: pageSize.value,
            },
        })
        .then((resp) => {
            pageData.value = resp.data;
        });
};
// 筛选查询
const siftResultList = (pageNum, pSize, siftQueryList) => {
    if (pageNum === null || pSize === null) {
        pageSize.value = pSize || pageSize.value;
        pageCurrNum.value = pageNum || pageCurrNum.value;
    }
    axios
        .get('/controller/results/list', {
            params: {
                projectId: route.params.projectId,
                page: pageCurrNum.value,
                pageSize: pageSize.value,
                suiteName: siftQueryList.suiteName,
                strike: siftQueryList.strike,
                status: siftQueryList.status,
                startTime: value1.value === null ? null : value1.value[0],
                endTime: value1.value === null ? null : value1.value[1]
            }
        })
        .then((resp) => {
            pageData.value = resp.data;
        });
};
const delResult = (id) => {
    axios
        .delete('/controller/results', {
            params: {
                id,
            },
        })
        .then((resp) => {
            if (resp.code === 2000) {
                ElMessage.success({
                    message: resp.message,
                });
                getResultList();
            }
        });
};
const forceStopSuite = (id) => {
    axios
        .get('/controller/testSuites/forceStopSuite', {
            params: {
                resultId: id,
            },
        })
        .then((resp) => {
            if (resp.code === 2000) {
                ElMessage.success({
                    message: resp.message,
                });
                getResultList();
            }
        });
};


const handleSelectionChange = (selection) => {
    // 获取选中行的ID
    selectedIds = selection.map(row => row.id);
    console.log('IDs:', selectedIds);
}
// 批量删除
const batchesDelete = () => {
    if (selectedIds.length === 0) {
        ElMessage.error("请选择需要删除的用例")
        return;
    }

    axios
        .post('/controller/results/batchesDelete', {
            ids: selectedIds,
        })
        .then((resp) => {
            console.log('delete IDs:', selectedIds);
            if (resp.code === 2000) {
                ElMessage.success({
                    message: resp.message,
                });
                getResultList();
            }
        });
}
onMounted(() => {
    getResultList();
});

const  options =  [{
    value: '1',
    label: '测试通过'
}, {
    value: '0',
    label: '运行中'
}, {
    value: '3',
    label: '测试失败'
}, {
    value: '2',
    label: '测试警告'
}]
</script>

<template>
    <el-button size="mini" @click="batchesDelete">{{
        "批量删除"
        }}
    </el-button>
    <br/>
    <br/>
    <el-table :data="pageData['content']" border @selection-change="handleSelectionChange">
        <!--  多选    -->
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
        <el-table-column
                width="80"
                :label="$t('resultDetailTS.page.resultId')"
                prop="id"
                align="center"
                show-overflow-tooltip
        >
        </el-table-column>
        <el-table-column
                min-width="280"
                prop="suiteName"
                header-align="center"
                show-overflow-tooltip
        >
            <template #header>
                <el-input
                        v-model="siftQueryList.suiteName"
                        size="mini"
                        placeholder='输入套件名称搜索'
                        @input="siftResultList(null, null, siftQueryList)"
                />
            </template>
        </el-table-column>
        <el-table-column
                :label="$t('resultDetailTS.page.executeUser')"
                width="120"
                align="center"
        >
            <template #header>
                <el-input
                    v-model="siftQueryList.strike"
                    size="mini"
                    placeholder='执行人'
                    @input="siftResultList(null, null, siftQueryList)"
                />
            </template>
            <template #default="scope">
                <el-tag v-if="scope.row.strike === 'SYSTEM'" size="small"
                >{{ $t('routes.timedTask') }}
                </el-tag>
                <span v-else>{{ scope.row.strike }}</span>
            </template>
        </el-table-column>
        <el-table-column
                :label="$t('resultDetailTS.page.runStatus')"
                width="120"
                align="center"
        >
            <template #header>
                <el-select v-model="siftQueryList.status" clearable placeholder="请选择" size="mini"
                           @change="siftResultList(null, null, siftQueryList)">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </template>
            <template #default="scope">
                <el-tag v-if="scope.row.status === 1" type="success" size="small"
                >{{ $t('resultDetailTS.page.testPass') }}
                </el-tag>
                <el-tag v-if="scope.row.status === 0" type="info" size="small"
                ><i class="el-icon-loading"></i> {{ $t('resultDetailTS.runIng') }}
                </el-tag>
                <el-tag v-if="scope.row.status === 3" type="danger" size="small"
                >{{ $t('resultDetailTS.page.testFail') }}
                </el-tag>
                <el-tag v-if="scope.row.status === 2" type="warning" size="small"
                >{{ $t('resultDetailTS.page.testAlert') }}
                </el-tag>
            </template>
        </el-table-column>
        <el-table-column
                width="500"
                prop="createTime"
                align="center"
        >
            <template #header>
                <el-date-picker
                    :clearable="true"
                    size="mini"
                    v-model="value1"
                    value-format="YYYY-MM-DD HH:mm:ss"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    @change="siftResultList(null, null, siftQueryList)">
                </el-date-picker>
            </template>
        </el-table-column>
        <el-table-column
                fixed="right"
                :label="$t('ResultsTS.testReport')"
                width="160"
                align="center"
        >
            <template #default="scope">
                <div style="text-align: center">
                    <el-button
                            size="mini"
                            icon="el-icon-tickets"
                            @click="router.push('ResultDetail/' + scope.row.id)"
                    >{{ $t('ResultsTS.lookReport') }}
                    </el-button>
                </div>
            </template>
        </el-table-column>
        <el-table-column
                fixed="right"
                :label="$t('common.operate')"
                width="220"
                align="center"
        >
            <template #default="scope">
                <el-popconfirm
                        style="margin-left: 10px"
                        :confirm-button-text="$t('form.confirm')"
                        :cancel-button-text="$t('form.cancel')"
                        icon="el-icon-warning"
                        icon-color="red"
                        :title="$t('ResultsTS.interruptTest')"
                        @confirm="forceStopSuite(scope.row.id)"
                >
                    <template #reference>
                        <el-button
                                :disabled="scope.row.status !== 0"
                                type="warning"
                                size="mini"
                                icon="el-icon-video-pause"
                        >{{ $t('ResultsTS.interrupt') }}
                        </el-button>
                    </template>
                </el-popconfirm>
                <el-popconfirm
                        style="margin-left: 10px"
                        :confirm-button-text="$t('form.confirm')"
                        :cancel-button-text="$t('form.cancel')"
                        icon="el-icon-warning"
                        icon-color="red"
                        :title="$t('ResultsTS.del')"
                        @confirm="delResult(scope.row.id)"
                >
                    <template #reference>
                        <el-button type="danger" size="mini" icon="el-icon-delete"
                        >{{ $t('common.delete') }}
                        </el-button>
                    </template>
                </el-popconfirm>
            </template>
        </el-table-column>
    </el-table>
    <pageable
            :is-page-set="true"
            :total="pageData['totalElements']"
            :current-page="pageData['number'] + 1"
            :page-size="pageData['size']"
            @change="getResultList"
    ></pageable>
</template>
