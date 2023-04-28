const { join } = require('path')

const allure = require('allure-commandline')

exports.config = {
    Host: 'localhost',
    port: 4723,
    path: '/wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "appPackage": "com.woocommerce.android",
        "appActivity": ".ui.main.MainActivity",
        "appWaitActivity": ".ui.login.LoginActivity",
        "app": join(process.cwd(), './App/Android/loja-ebac.apk'),


    }],
    waitforTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },

    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]],

    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },

    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        await driver.takeScreenshot();
    }


}