/**
 * EN language
 */
const robot = {
    robotType: 'Robot Type',
    robotTypePlaceholder: '请选择机器人类型',
    robotToken: 'WebHook',
    robotTokenPlaceholder: '请输入群机器人的WebHook',
    robotSecret: 'Secret',
    robotSecretPlaceholder: '（可选）请输入群机器人的密钥'
}
const agent = {
    newAgent: "New Agent",
    clickToCopy: 'Copy Key',
    status: {
        name: 'Status',
        online: 'ONLINE',
        offline: 'OFFLINE',
        s2ae: 'S2AE'
    },
    system: 'System',
    version: 'Version',
    operation: 'Operation',
    shutdown: 'Shutdown',
    edit: {
        name: 'Name',
        highTemp: "高温值",
        highTempTime: "高温超时",
        rule: 'Agent name cannot be empty',
        namePlaceholder: 'Please enter the Agent name'
    }
}
const devices = {
    title: 'Sonic Cloud',
    list: 'Device List',
    form: {
        model: 'Model',
        manufacturer: 'MFR',
        system: 'System',
        battery: {
            level: 'Level',
            temperature: 'Temp'
        },
        agent: 'Agent'
    },
    detail: {
        image: 'Image',
        uploadImg: 'Click to Upload',
        nickName: 'NickName',
        nickPlaceholder: 'Enter device nickname',
        name: 'Name',
        model: 'Model',
        udId: 'UDID',
        size: 'Screen Size',
        cpu: 'CPU',
        pwd: 'Password',
        pwdPlaceholder: 'Default Sonic123456',
        operation: 'Operation',
        reboot: 'Reboot',
        rebootTips: 'Are you sure to reboot the device?',
        deleteTips: 'Are you sure to delete the device?'
    },
    useRightNow: 'Use Now',
    moreDetail: 'More',
    deviceCenter: 'Device Center',
    agentCenter: 'Agent Center',
    status: {
        ONLINE: 'ONLINE',
        DEBUGGING: 'DEBUGGING',
        TESTING: 'TESTING',
        DISCONNECTED: 'DISCONNECTED',
        OFFLINE: 'OFFLINE',
        UNAUTHORIZED: 'UNAUTHORIZED',
        ERROR: 'ERROR'
    },
    filter: {
        all: 'All',
        platform: {
            ANDROID: 'Android',
            IOS: 'iOS',
            HARMONY: 'Harmony'
        },
        manufacturer: 'Manufacturer',
        cpu: 'CPU',
        size: 'Screen Size',
        agent: 'Agent',
        status: 'Status',
        placeholder: 'Please enter the model, name, or serialNumber',
        button: 'Filter'
    },
    refresh: 'Auto refresh',
    avgTem: 'Current average battery temperature: ',
    hint: 'Set Prompt',
    adTemperature: {
        temperature: "当设备温度≥",
        height: "高温值",
        onlyAd: "时（仅安卓），会通知机器人告警。",
        then: "当",
        timeout: "高温超时",
        continuedTime: "时间内温度持续≥",
        onlyAdNotice: "时（仅安卓），会通知机器人并",
        shutdown: "关机"
    }
}
// 布局相关
const layout = {
    // header
    theme: 'Current theme: ',
    languages: 'Languages',
    deviceCenter: 'Device Center',
    myInfo: 'My Information',
    changePassword: 'Change Password',
    signOut: 'Sign Out',
    aboutSonic: 'About Sonic',
    backHome: 'Home',
    welcomeSpeech: "Welcome to Sonic cloud real machine testing platform. Please select the project to enter.",
    addProject: "New Project",
    officialWebSite: 'Sonic Official WebSite',
    versionUpdateRecord: 'Version Record'
}
// 表单相关
const form = {
    save: 'Save',
    unknown: 'Unknown',
    notEmpty: "Not Empty!",
    differentInput: "The twice inputs are inconsistent!",
    username: "User Name",
    role: "Role",
    testEngineer: "Test Engineer",
    developmentEngineer: "Development Engineer",
    oldPasswordNotEmpty: "Old password can't be empty",
    oldPassword: "Old Password",
    inputOldPassword: "Please enter your old password",
    newPasswordNotEmpty: "New password can't be empty",
    newPassword: "New Password",
    inputNewPassword: "Please enter your new password",
    inputNewPasswordAgain: "Please enter your new password again",
    confirm: "Confirm",
    cancel: "Cancel"
}
// 弹窗相关
const dialog = {
    permissionDenied: 'Permission denied!',
    suffixError: 'Incorrect file suffix!',
    projectInfo: "Project Information",
    agentInfo: 'Agent Information',
    myInfo: "My Information",
    changePassword: "Change Password",
    copy: {
        success: 'Copy Successful!',
        fail: 'Copy failed!'
    }
}
//通用操作
const common = {
    null: 'Null',
    delete: 'Delete',
    edit: 'Edit',
    operate: "操作",
    copy: "复制",
}
// 路由
const routes = {
    login: "Login",
    home: "Home ",
    deviceCenter: "Device Center",
    remoteControl: "Remote Control",
    androidTestCase: "Android Test Case",
    iosTestCase: 'IOS Test Case',
    operateSteps: "Operating Steps",
    testSuite: "Test Suite",
    testResult: "Test Result",
    reportDetails: "Report Details",
    publicSteps: "Public Steps",
    controlElement: "Control Element",
    globalParameter: "Global Parameter",
    moduleManage: "Modules Management",
    versionIteration: "Version Iteration",
    timedTask: "Timed Task",
    projectSetting: "Project Setting",
    projectPage: "Project Home",
    resource: "",
    role: "",
    scripts: "Scripts Template Management"
}
const setting = {
    title: "Manage Center"
}
const androidTestCase = {
    addCase: "Add Test Case",
}
const elements = {
    eleInfo: "Control Element information",
    stepInfo: "Step info",
    warn: "Warning",
    warnInfo: "This control already exists in the following step, deleting this control will delete it along with the following step! Please go to the corresponding step to modify the control or make sure the corresponding step is discarded!",
    stepList: {
        stepId: "Step Id",
        useCaseId: "Use case Id",
        userCaseName: "Use case name",
        noCase: "no Use case"
    },
    sureDelete: "Confirm deletion",
    addElement: "Add control element",
    controlId: "control element id",
    inputNameSearch: "Enter the name of element control to search",
    moduleName: "Module name",
    targetingType: "Targeting Type",
    coordinate: "Coordinate",
    picture: "Picture",
    notSpecified: "Not specified",
    cEleValue: "Control element value",
    inputKeySearch: "Input the control element value to search",
    sureDelInfo: "Sure to delete this control element?",
}
const globalParamsTs = {
    dialogVisible: {
        info: "Global parameters information",
        specialUse: "Special Use",
        messageInfo: "If you have more than one parameter value, you can use '{'|'}' to separate them, they will be randomly assigned when assigning devices, and only the same parameter value will be taken in a single task. The [random] and [timestamp] parameters are built-in and can be used to construct random data",
        keyName: "Parameter name",
        keyNameMessage: "The parameter name cannot be empty, English is recommended",
        inputName: "Please input the parameter name",
        valueName: "Parameter value",
        valueNameMessage: "The parameter value cannot be empty, multiple values can be separated by '{'|'}'",
        inputValue: "Please enter the value of the parameter, multiple values can be separated by '{'|'}'",
    },
    addGlobalParams: "Add global parameters",
    paramsList: {
        id: "Parameter id",
        name: "Parameter name",
        value: "Parameter value"
    },
    delMessage: "Sure to delete this global parameter?"
}
const homeTS = {
    projectOverview: "Project Overview",
    testCaseManagement: "Test Case Management",
    testCase: {
        case: "Test Cases",
        adCase: "Test cases for Android",
        iosCase: "Test cases for iOS"
    },
    testSuite: "Test Suite",
    testDataManagement: "Test Data Management",
    testResults: "Test result analysis",
    setting: "Continuous integration settings",
    package: {
        mange: "Install Package Management",
        bulk: "Bulk package installation",
    },
    crashReport: "Crash Reporting",
    projectSetting: {
        setting: "Project related settings",
        mange: "Module management",
        update: "Version iteration",
    }
}
const jobsTS = {
    dialogVisible: {
        message: "Timed job message",
        name: "Job name",
        nameIsNull: "Job name cannot be empty",
        inputName: "Please enter the job name",
        testSuiteIsNull: "The test suite cannot be empty",
        chooseTestSuite: "Please choose the test suite",
        cron: "Cron expression",
        cronIsNull: "Cron expression cannot be empty",
        inputCron: "Please enter a Cron expression"
    },
    addCron: "Add a timed task",
    whatCron: "What is a Cron expression?",
    cronInfo: {
        one: "* The first bit, indicating seconds, value range: 0-59",
        two: "* The second bit, indicating minutes, value range: 0-59",
        three: "* The third digit, indicating the hour, value range: 0-23",
        four: "* The fourth digit, indicating the date, value range: 1-31",
        five: "* The fifth digit, indicating the month, value range: 1-12",
        six: "* The sixth digit, indicating the day of the week, value range: 1-7",
        seven: "* The seventh digit, indicating the year, can be left blank, value range: 1970-2099",
        asterisk: "(*) asterisk: can be interpreted as meaning every, every second, every minute",
        questionMark: "(?) question mark: can only appear in the date and day of the week, indicating that the value of this position is uncertain",
        bar: "(-) expresses a range, e.g. 10-12 in the hour field, means from 10:00 to 12:00",
        comma: "(,) a comma that expresses a list of values, such as 1,2,4\n" +
            "in the week field, then it means Monday, Tuesday, Thursday",
        slash: "(/) slash, e.g. x/y , x is the start value, y is the step length, e.g. use \n" +
            " in the first (second) place 0/15, means start from 0 seconds and every 15 seconds",
        official: "Official explanation:",
        demoOne: "0 0 3 * * ? Execute at 3:00 per day",
        demoTwo: "0 5 3 * * ? executes at 3:05 every day",
        demoThree: "0 5 3 ? * * executed every day at 3:05",
        demoFour: "0 5/10 3 * * ? 3:5, 15, 25, 35, 45, 55\n" +
            "Execute in these points",
        demoFive: "0 10 3 ? * 1 is executed every week on Sunday at 3:10, note: 1 means Sunday",
        demoSix: "0 10 3 ? * 1#3 Executed on the third Sunday of every month, # can only appear in the week position",
        hint: "Note: The number in the sixth position (day of the week) may not be expressed correctly, you can use the abbreviation to express it, such as: Sun"
    },
    taskId: "task id",
    run: "Run immediately",
    del: "Delete this timed task?"
}
const loginTS = {
    testPlatform: "One-stop cloud-based real device testing platform",
    login: {
        message: "Register account/LDAP domain account login",
        register: "Registered account login",
        LDAPLogin: "LDAP domain account login",
    },
    user: {
        inputUserName: "Please enter the account",
        inputPassword: "Please enter the password",
        longin: "Login",
        register: "Register",
    }
}
const modulesTS = {
    info: "Module information",
    name: "Module name",
    isNotNull: "The module name cannot be empty",
    inputName: "Please enter the module name",
    sure: "sure",
    add: "Add module",
    del: "Delete this module?",
}
const packagesTS = {
    accessGuide: "Access Guide",
    buildLink: "build link",
    platform: "platform",
    no: "not specified",
    packageName: "Package name",
    branch: "branch",
    inputName: "Enter branch name",
    downloadLink: "download hyperlink",
    copyUrl: "Copy url",
    creatTime: "Created Time",
}
const projectIndexTS = {
    code: {
        lastWeek: "Last week",
        lastMonth: "Last Month",
        lastThreeMonth: "Last three months",
        day: "Day",
        hour: "Hour",
        minute: "Minute",
        second: "Second",
        runInfo: "Overviews",
        unit: "Unit(%)",
        passRate: "Pass rate for the day",
        stateDis: "State Distribution",
        other: "Other",
        pass: "Pass",
        fail: "Fail",
    },
    page: {
        to: "To",
        startTime: "start date",
        endTime: "end date",
        caseTop5: "Ranking of use case runtime（Top 5）",
        caseId: "use case id",
        caseName: "use case name",
        timeLong: "duration",
        equipmentTop5: "Ranking of use case runtime（Top 5）",
        eqId: "device model",
        serialNumber: "serial number",
    }
}
const publicStepTS = {
    info: "Public step information",
    add: "Add public step",
    id: "public step Id",
    name: "public step name",
    platform: "Platform",
    android: "ANDROID",
    list: "List of steps",
    stepId: "Step Id",
    useCase: "Belonging use case",
    stepInfo: "Step Details",
    viewSteps: "View Steps",
    sureDel: "Delete this public step?",
}
const resultDetailTS = {
    memoryInfo: "Memory details",
    unit: "Unit (KB)",
    battery: "Power details",
    memoryShort: "Insufficient memory data",
    batteryShort: "Insufficient power data",
    performance: "Insufficient performance data",
    caseRun: "Use case running status distribution",
    noStart: "Not started",
    runIng: "Running",
    caseStatus: "Use case status",
    page: {
        reportInfo: "Report Info",
        resultId: "result Id",
        executeUser: "Execution User",
        runStatus: "Running Status",
        testPass: "Test passed",
        testFail: "Test failed",
        testAlert: "Test Alert",
        endTime: "End Time",
        totalTime: "total time spent",
        runInfo: "RunInfo",
        total: "Time elapsed",
        runLog: "runLog",
        performanceInfo: "Performance Info",
        runRecording: "Run Recording",
        onRecording: "No recording yet"
    }
}
const ResultsTS = {
    name: "Test Suite Name",
    testReport: "test report",
    lookReport: "View report",
    interruptTest: "Interrupt this test?",
    interrupt: "Interrupt",
    del: "Delete this test report?",
}
const stepListViewTS = {
    caseInfo: "Use Case Details",
    platformToBe: "Belonging Platform",
    module: "module",
    versionName: "Version name",
    designer: "designer",
    last: "Last modified date",
    testMessage: "Use Case Description",
}
const testSuitesTS = {
    testStart: "Testing has started...",
    info: "Test Suite Information",
    add: "Add test suite",
    id: "Suite Id",
    searchMessage: "Enter test Kit name to search",
    kitPlatform: "Kit Platform",
    coverType: "Covering Type",
    testCover: "Use Case Covering",
    deviceCover: "Device Covering",
    associated: "associated device",
    device: {
        id: "device id",
    },
    viewList: "View List",
    associatedCase: "associated use case",
    run: "Run",
    delMessage: "Delete this test suite? The use cases under the suite will be moved out of the suite"
}
const versionsTS = {
    iteration: "Version iteration information",
    noNull: "The version name cannot be empty",
    inputName: "Please enter the version name",
    time: "time",
    timeNoNull: "The time cannot be empty",
    selectTime: "Select date and time",
    addVersions: "Add version iterations",
    delMessage: "Delete this version?",
}
const androidRemoteTS = {
    repairedSuccess: "Repaired successfully",
    associationSuccess: "Associated successfully",
    copySuccess: "Copy Success",
    copyFail: "Copy failed",
    noWebSocket: "WebSocket is not supported",
    connection: "Connection successful",
    systemException: "An exception occurred in the system! Remote control has been disconnected!",
    messageOne: "Screen rotation detected! Please wait...",
    getPocoSuccess: "Getting Poco control was successful!",
    getPocoFail: "Failed to get POCO control! Please make sure the corresponding game engine is open and connected to the Poco-SDK",
    pullFile: {
        success: "Pulling the file was successful",
        fail: "Failed to pull the file"
    },
    pushFile: {
        success: "Uploading the file was successful!",
        fail: "Uploading file failed! Needs to be filled with filenames"
    },
    getEle: {
        success: "Getting native control elements was successful!",
        fail: "Failed to get the control element! Please try it again"
    },
    install: {
        success: "Installation successful!",
        fail: "Installation failed!",
    },
    uninstall: {
        success: "Uninstall successful!",
        fail: "Uninstall failed!",
    },
    runOver: "Run finished",
    getSuccess: "Get Success!",
    getPsSuccess: "Get snapshot was successful!",
    loadIng: "Loading the application list, please wait...",
    messageTwo: "Automatic global proxy has been canceled, please configure the proxy manually",
    startUninstall: "Starting to uninstall! Please wait...",
    failErr: "Wrong file format!",
    addOne: "Only one file can be added! Please remove the old file first",
    startInstall: "Starting installation! Please wait...",
    high: "High",
    middle: "Middle",
    low: "Low",
    deviceFail: "This device is temporarily unavailable!",
    remoteAudio: "Remote audio is on, please do not repeat!",
    audio: "Remote audio transfer is connected!",
    audioFail: "Remote audio transmission has been disconnected!",
    audioSuccess: "Remote audio synchronization successful!",
    code: {
        elementsSnapshot: "Control element snapshot",
        eleName: "Control element name",
        eleNullName: "The control element name cannot be empty",
        inputName: "Please enter the name of the control element",
        saveEle: "Save as image element",
        preparingImager: "Prepare image in...",
        systemVersion: "System version",
        projectionMode: "Projection mode",
        frameNumber: "The number of frames to cast",
        manualRepair: "Repair manually",
        fixBlackScreen: "Fix black screen",
        fixTouch: "Fix touch",
        fixScreen: "Fix horizontal and vertical screen",
        remoteAudioTran: "Remote audio transfer",
        batterySimulation: "Battery Simulation",
        simulatePowerOutage: "Simulate power outage",
        reset: "reset",
        physicalLookup: "Physical Lookup",
        BV: "Brightness/Volume",
        dial: "Dial",
        photograph: "Take a picture",
        browser: "Browser",
        LUS: "Lock/Unlock Screen",
        remoteControlPanel: "remote control panel",
        inputText: "Enter text",
        pleaseText: "Please enter the text you want to send, Simplified Chinese is supported",
        send: "Send",
        remoteADB: "Remote ADB",
        noAgent: "The Agent is not enabled!",
        UIAutomator2ServerInit: "Initialize UIAutomator2Server",
        automaticInitialization: "Next time enter automatic initialization",
        scanQRCode: "Scan QR code",
        errTitle: "Some models of OPPO and Vivo do not appear in the album after uploading QR code, need to restart to take effect",
        messageThree: "Drag the QR code image here, or",
        messageFour: "Only jpg/png files can be uploaded",
        fileTransfer: "File transfer to each other",
        upFile: "Upload a file",
        messageFive: "Drag the file here, or",
        pleaseFilePath: "Please enter the upload destination path (plus file name)",
        filePath: "Pull the file",
        pullFilePath: "Please enter the pull target path",
        installFile: "Download file",
        app: "Application",
        pushInstall: "Upload to Install",
        apkFile: "Drag the APK file here, or",
        onlyAPKFile: "Only upload apk files",
        URLInstall: "Install via URL",
        hint: "Please enter apk download link or local path",
        refresh: "Refresh",
        appName: "appName",
        packagesName: "packageName",
        version: "version number",
        subversion: "subversion number",
        nameSearch: "Search by application name or package name",
        open: "Open",
        unInstall: "Uninstall",
        packet: "Network packet capture",
        startPacket: "Start network packet capture",
        downloadCertificate: "Download certificate",
        cancelGlobalProxy: "Cancel global proxy",
        proxyConnection: "Proxy connection",
        useTeaching: "Use Teaching",
        connectWifi: "Connect to Wifi",
        connectWifiText: "If you are not connected to Wifi, you need to go to the Wifi list to connect to your Wifi. wifi needs to be interoperable with Agent's network, click refresh after connecting to regain Wifi status",
        installCertificate: "Install Certificate",
        installCertificateText: "The first time to capture the package need to install the certificate, click the download button to download the certificate and install. If the browser can not access, please make sure the Agent has closed the firewall.",
        startCapturing: "Start capturing",
        startCapturingText: "Click to start grabbing packets, you can start to experience it! (default automatic global proxy, if you do not need to click the cancel global proxy button, and then go to the Wifi page to manually configure)",
        screenshotQuick: "ScreenshotQuick",
        screenshot: "Screenshot",
        clean: "Clear",
        noScreenshots: "No screenshots yet",
        savePicture: "Save picture",
        precautions: "Precautions",
        precautionsText: "This feature is still in Beta testing, temporarily blocking reboot, rm, su and other risky commands",
        inputSend: "After entering the command, click Send or enter to send",
        enterInput: "Please enter the input filter text",
        UIAutomation: {
            UIAutomationName: "UI Automation",
            testInfo: "Use Case Details",
            clean: "Unassociate",
            fatherPlayed: "Belonging items",
        },
        associatedProject: "Associated Project",
        chooseProject: "Please choose the associated project",
        addCase: "Add Use Case",
        hintText: "Hint",
        hintMessage: "This function needs to be associated with a test case from above first",
        nativeControls: "Native Controls",
        retrieveControlEle: "Retrieve control element",
        activity: "Current Activity",
        webViewList: "WebView list",
        classFilter: "Enter class or resource-id to filter",
        addControls: "Add controls",
        controlSnapshot: "Control Snapshot",
        titleMessage: "Save controls after associating with a project",
        xpath: "xpath recommendation",
        xpathNull: "No recommended syntax for xpath yet",
        absolutePath: "Absolute path",
        centerXY: "Center coordinates",
        label: {
            one: "Checkable or not",
            two: "Checkable or not",
            three: "Clickable or not",
            four: "Checked or not",
            five: "Show or not",
            six: "Available or not",
            seven: "Focusable or not",
            eight: "Focused or not",
            nine: "If or not long press is supported",
            ten: "Whether to support scrolling"
        },
        subTitleText: "Please get the control element first, this function needs to initialize the Driver",
        getEle: "Get the control element",
        poco: "Poco control",
        getPoco: "Get Poco control",
        pocoSDK: "Poco-SDK Access Guide",
        moreFeaturesAdd: "More features are being added...",
        getPocoSDKMessage: "Please get the Poco control element first, this feature requires the engine to have access to the Poco-SDK",
        webView: {
            webDebug: "Web debug",
            err: "No webView process at the moment",
            getWeb: "Get webView process",
            againGetWeb: "Retrieve webView process",
            Untitled: "No title",
            nowDebug: "Debug now",
            return: "Return",
            nowWeb: "Current page",
            messageInfo: "If your browser is not compatible with this feature, please provide feedback to ",
            here: "here"
        }
    }
}
const indexIOSTS = {
    contentText: "Switching layout",
    successText: "Switching success",
}
const settingIndexTS = {
    center: {
        background: "Admin Center",
        rights: "Permissions configuration",
        resource: "Resource management",
        roleText: "Role management",
        userCon: "User Configuration",
        systemCon: "System Configuration",
        scheduled: "System timed tasks"
    }
}
const resourceTS = {
    syncSucceed: "Sync successfully!",
    syncResource: "Sync Resources",
    syncResourceInfo: "Sync resource description",
    syncResourceInfoMessage: "Re-full update of all requested resource information in the application, general version updates need to be synchronized",
    pageData: {
        idText: "Resource id",
        message: "description",
        path: "path",
        inputPathName: "Input path name",
        callMethod: "Call method",
        requiredText: "Whether authentication is required"
    }
}
const roleTS = {
    dialogVisible: {
        addOrEdit: "Add/Edit role",
        roleName: "Role name",
        roleNoNull: "Role name cannot be Empty",
        inputParam: "Please enter the parameter name",
        paramNoNull: "The value of the parameter cannot be Empty",
        roleInfo: "Please enter a role description",
        addRole: "Add a role"
    },
    pageData: {
        role: "role",
        nameL: "Name",
        delMessage: "Delete this role?"
    }
}
const sysJobsTS = {
    code: {
        cleanFile: "Clean up system files",
        cleanFileText: "Clean up the files such as pictures, videos or temporary apk packages generated during the testing process, and keep the number of days as [the interval between the previous two timed tasks and this timed task] days.",
        cleanResult: "Clean test report",
        cleanResultText: "Clean test report, the number of days to keep is [the interval between the first two timed tasks and this timed task] days.",
        sendDayReport: "Send daily report",
        sendDayReportText: "Send the test daily report to the group robot.",
        sendWeekReport: "Send weekly report",
        sendWeekReportText: "Send test weekly report to group bot."
    },
    page: {
        type: "Type",
        nextTriggerDate: "Next trigger date",
        editTime: "Edit system timed task",
    }
}
const usersTS = {
    dialogVisible: {
        editUser: "Edit user role",
        userName: "Username",
        chooseUserName: "Please choose a user role"
    },
    pageData: {
        userId: "user id",
        userName: "username",
        inputName: "Enter username",
        roleConfiguration: "role configuration"
    }
}
const IOSRemote = {
    startSimulating: "Start simulating the positioning...",
    positioningRestored: "Positioning has been resumed",
    loadingAppList: "Loading the list of apps, please wait...",
    calibration: "Calibration complete",
    clipboard: {
        SentSuccessfully: "Sending clipboard was successful!",
        text: "Getting clipboard text was successful!",
        operate: "Clipboard operation",
        inputText: "Please enter the content you want to send to the clipboard",
        send: "Send to clipboard",
        getText: "Get clipboard text",
    },
    clarityAndFps: "Clarity and FPS",
    calibrationCoordinates: "Calibration coordinates",
    volume: "volume",
    siri: {
        command: "Siri command",
        inputCommand: "Please input siri command, example: what day is it today?",
    },
    positioning: {
        mock: "Simulate positioning",
        x: "Longitude",
        y: "Latitude",
        start: "Start to simulating",
        end: "resume positioning",
    },
    remoteWDA: "Remote WDA",
    driverNotSuccess: "driver was not initialized successfully",
    errLog: "File interchange and crash log",
    waitOpen: "This feature will be opened soon",
    moveIPA: "Drag the ipa file here, or",
    onlyIPAFile: "Only upload ipa files",
    installIPA: "Install IPA",
    pleaseIPAFilePath: "Please enter ipa download link or local path",
    openWeb: "Open browser",
    web: {
        openInput: "Open the browser and enter the URL",
    },
    messageStep: "Go to phone [Settings] -> [General] -> [VPN & Device Management / Profile & Device Management / Device Management / Profile] -> find mitmproxy certificate to install",
    trustCertificate: "Trust Certificate",
    certificateStep: "Go to the bottom of [Settings] -> [General] -> [About this phone] -> [Certificate Trust Settings] to trust the corresponding certificate",
    startPacketMessage: "After clicking start packet capture, Wifi set manual proxy, connect to the corresponding ip and port in the upper right corner to start packet capture",
    filterClassOrName: "Enter class or name to filter",
    predicate: "Predicate recommend",
    noRecommend: "No recommended syntax for now",
}
export default {
    message: {
        robot,
        agent,
        common,
        devices,
        layout,
        form,
        dialog,
        routes,
        setting,
        androidTestCase,
        elements,
        globalParamsTs,
        homeTS,
        jobsTS,
        loginTS,
        modulesTS,
        packagesTS,
        projectIndexTS,
        publicStepTS,
        resultDetailTS,
        ResultsTS,
        stepListViewTS,
        testSuitesTS,
        versionsTS,
        androidRemoteTS,
        indexIOSTS,
        settingIndexTS,
        resourceTS,
        roleTS,
        sysJobsTS,
        usersTS,
        IOSRemote
    }
}
