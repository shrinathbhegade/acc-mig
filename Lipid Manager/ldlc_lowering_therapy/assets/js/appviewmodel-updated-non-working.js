isNativeApplication = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
/* ko.extenders.required function is for validate inputs fields as per requirement.
* @param target: bind input which required validation.
* @param overrideMessage: override default error/warning message.
*/

ko.extenders.pretreatmentBaselineHDLC = function (target, inputObj) {

    var result = ko.pureComputed({
        read: target,  //always return the original observables value
        write: function (newValue) {
            var errorClases = '';
            var ex = parseFloat(newValue);
            if (!isNaN(ex)) { //either the value came from session storage or user entered correct value
                result.dirty(true);
                result.touched(true);
            }
            if (result.touched() && result.dirty()) {
                var pattrn = /^\d{0,3}(\.\d{1,3})?$/;
                if (!appmodel.Form().UnitOfMeasure()) {

                    if (newValue === '' || newValue === 'undefined') {
                        target('');
                        document.getElementById(inputObj.inputID).value = '';
                        errorClases = ' error';
                        result.dirty(false);
                        result.touched(false);
                    } else if (!(pattrn.test(newValue))) {
                        target('');
                        errorClases = ' error';
                        result.dirty(false);
                        result.touched(false);
                    } else if (
                        (appmodel.Form().baselineLDLC_range() == "40to189" && (ex < 40 || ex >= 190)) ||
                        (appmodel.Form().baselineLDLC_range() == "70to189" && (ex <= 70 || ex >= 190)) ||
                        (appmodel.Form().baselineLDLC_range() == "gte190" && (ex < 190 || ex > 999))
                    ) {
                        target('');
                        errorClases = ' warning';
                        result.dirty(false);
                        result.touched(false);
                    } else {
                        target(newValue);
                        errorClases = '';
                    }
                }
                else {

                    if (newValue === '' || newValue === 'undefined') {
                        target('');
                        document.getElementById(inputObj.inputID).value = '';
                        errorClases = ' error';
                        result.dirty(false);
                        result.touched(false);
                    } else if (!(pattrn.test(newValue))) {
                        target('');
                        errorClases = ' error';
                        result.dirty(false);
                        result.touched(false);
                    } else if (
                        (appmodel.Form().baselineLDLC_range() == "40to189" && (ex < 1.036 || ex >= 4.920)) ||
                        (appmodel.Form().baselineLDLC_range() == "70to189" && (ex <= 1.813 || ex >= 4.920)) ||
                        (appmodel.Form().baselineLDLC_range() == "gte190" && (ex < 4.920 || ex > 25.874))
                    ) {
                        target('');
                        errorClases = ' warning';
                        result.dirty(false);
                        result.touched(false);
                    } else {
                        target(newValue);
                        errorClases = '';
                    }
                }


                result.warningClass(errorClases);
                target.notifySubscribers(newValue);
            }

        }
    }).extend({ notify: 'always' });

    result.warningClass = ko.observable();
    result.touched = ko.observable(false);
    result.dirty = ko.observable(false);

    result(target());
    return result;
};


ko.extenders.numeric = function (target, inputObj) {

    var result = ko.pureComputed({
        read: target,  //always return the original observables value
        write: function (newValue) {
            var errorClases = '';
            var ex = parseFloat(newValue);
            if (!isNaN(ex)) { //either the value came from session storage or user entered correct value
                result.dirty(true);
                result.touched(true);
            }
            if (result.touched() && result.dirty()) {
                var pattrn = /^\d{0,3}(\.\d{1,3})?$/;
                if (!appmodel.Form().UnitOfMeasure()) {
                    if (newValue === '' || newValue === 'undefined') {
                        target('');
                        document.getElementById(inputObj.inputID).value = '';
                        errorClases = ' error';
                        result.touched(false);
                        result.dirty(false);
                    } else if (!(pattrn.test(newValue))) {
                        target('');
                        errorClases = ' error';
                        result.dirty(false);
                        result.touched(false);
                    } else if (ex < inputObj.minUS || ex > inputObj.maxUS) {
                        target('');
                        errorClases = ' warning';
                        result.dirty(false);
                        result.touched(false);
                    } else {
                        target(newValue);
                        errorClases = '';
                    }
                }
                else {
                    if (newValue === '' || newValue === 'undefined') {
                        target('');
                        document.getElementById(inputObj.inputID).value = '';
                        errorClases = ' error';
                        result.dirty(false);
                        result.touched(false);
                    } else if (!(pattrn.test(newValue))) {
                        target('');
                        errorClases = ' error';
                        result.dirty(false);
                        result.touched(false);
                    } else if (ex < inputObj.minSI || ex > inputObj.maxSI) {
                        target('');
                        errorClases = ' warning';
                        result.dirty(false);
                        result.touched(false);
                    } else {
                        target(newValue);
                        errorClases = '';
                    }
                }

                result.warningClass(errorClases);
                target.notifySubscribers(newValue);
            }


        }
    }).extend({ notify: 'always' });

    result.warningClass = ko.observable();
    result.touched = ko.observable(false);
    result.dirty = ko.observable(false); //flag to check if anything is written

    result(target());
    return result;
};



function viewModel() {
    var self = this;
    self.Form = ko.observable(new formObject()); //pooja commented as below there is code

    //Calculator viewmodel code
    self.FormData = formdata;
    //self.Form = ko.observable(new formObject(self));
    self.validate = ko.observable(false);
    self.doNotShowAgainVisible = ko.observable(true);
    self.onForecastPage = ko.observable(false);
    self.validate = ko.observable(false);
    self.baselineValidate = ko.observable(false);
    self.viewportHeight = ko.observable(window.innerHeight);
    self.viewportWidth = ko.observable(window.innerWidth);

    self.sexValidation = ko.pureComputed(function () {
        if (self.Form().Sex() == null && self.validate() == true) {
            return self.FormData.notifications.sex[0];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.diabeticValidation = ko.pureComputed(function () {
        if (self.Form().Diabetic() == null && self.validate() == true) {
            return self.FormData.notifications.diabetic[0];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.smokerValidation = ko.pureComputed(function () {
        if (self.Form().Smoker() == null && self.validate() == true) {
            return self.FormData.notifications.smoker[0];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.hypertensionValidation = ko.pureComputed(function () {
        if (self.Form().Hypertension() == null && self.validate() == true) {
            return self.FormData.notifications.hypertension[0];
        } else if (self.Form().Hypertension() != null && self.Form().Hypertension() == "No" && self.Form().BaselineHypertension() == "Yes" && self.isFollowUp()) {
            return self.FormData.notifications.hypertension[1];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.raceValidation = ko.pureComputed(function () {
        if (self.Form().Race() == null && self.validate() == true) {
            return self.FormData.notifications.race[0];
        } else if (self.Form().Race() != null && self.Form().Race() == "Other") {
            return self.FormData.notifications.race[1];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.hdlValidation = ko.pureComputed(function () {
        var i = self.FormData.notifications.blank[0];
        if (self.Form().HDLCholesterolValue() == null && self.validate() == true) {
            i = self.FormData.notifications.hdlCholesterol[0];
        } else if (self.Form().HDLCholesterolValue() != null && !(new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$")).test(self.Form().HDLCholesterolValue())) {
            i = self.FormData.notifications.hdlCholesterol[3];
        } else if (self.Form().HDLCholesterolValue() != null && (self.Form().HDLCholesterol() < 20 || self.Form().HDLCholesterol() > 100)) {
            i = self.Form().UnitOfMeasure() ? self.FormData.notifications.hdlCholesterol[2] : self.FormData.notifications.hdlCholesterol[1];

        } else {
            i = self.FormData.notifications.blank[0];

        }
        return i;
    }, self);
    self.totalCholesterolValidation = ko.pureComputed(function () {
        var i = self.FormData.notifications.blank[0];
        if (self.Form().TotalCholesterolValue() == null && self.validate() == true) {
            i = self.FormData.notifications.totalCholesterol[0];
        } else if (self.Form().TotalCholesterolValue() != null && !((new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$")).test(self.Form().TotalCholesterolValue()))) {
            i = self.FormData.notifications.totalCholesterol[3];
        } else if (self.Form().TotalCholesterolValue() != null && (self.Form().TotalCholesterol() < 130 || self.Form().TotalCholesterol() > 320)) {
            i = self.Form().UnitOfMeasure() ? self.FormData.notifications.totalCholesterol[2] : self.FormData.notifications.totalCholesterol[1];
        } else {
            i = self.FormData.notifications.blank[0];
        }
        return i;
    }, self);
    self.ldlValidation = ko.pureComputed(function () {
        var formatRegex = new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$");

        var i = self.FormData.notifications.blank[0];
        if (self.Form().LDLCholesterolValue() == null && self.validate() == true) {
            i = self.FormData.notifications.ldlCholesterol[0];
        } else if (self.Form().LDLCholesterolValue() != null && !formatRegex.test(self.Form().LDLCholesterolValue())) {
            i = self.FormData.notifications.ldlCholesterol[4];
        } else if (self.Form().LDLCholesterolValue() != null && (self.Form().LDLCholesterol() < 30 || self.Form().LDLCholesterol() > 300)) {
            i = self.Form().UnitOfMeasure() ? self.FormData.notifications.ldlCholesterol[2] : self.FormData.notifications.ldlCholesterol[1];
        } else if (self.Form().LDLCholesterolValue() != null && (parseFloat(self.Form().LDLCholesterol().toFixed(3)) > parseFloat((self.Form().TotalCholesterol() - self.Form().HDLCholesterol()).toFixed(3)))) {
            i = self.Form().UnitOfMeasure() ? self.FormData.notifications.ldlCholesterol[3] : self.FormData.notifications.ldlCholesterol[3];
        } else {
            i = self.FormData.notifications.blank[0];
        }
        return i;
    }, self);
    self.ldlValidation.subscribe(function () {
        if (self.Form().LDLCholesterol() >= 190 || self.Form().LDLCholesterol() <= 69) {
            self.resetBaselineValues();
            self.Form().VisitTypeUI(undefined);
            self.Form().VisitType(false);
            self.validate(false);
        }
    });
    self.bloodPresureValidation = ko.pureComputed(function () {
        if (self.Form().BloodPressure() == null && self.validate() == true) {
            return self.FormData.notifications.bloodPresure[0];
        } else if (self.Form().BloodPressure() != null && !(new RegExp("^[0-9]{1,3}$")).test(self.Form().BloodPressure())) {
            return self.FormData.notifications.bloodPresure[2];
        } else if (self.Form().BloodPressure() != null && (self.Form().BloodPressure() < 90 || self.Form().BloodPressure() > 200)) {
            return self.FormData.notifications.bloodPresure[1];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.DBloodPressureValidation = ko.pureComputed(function () {
        if (self.Form().DBloodPressure() == null && self.validate() == true) {
            return self.FormData.notifications.dbloodPresure[0];
        } else if (self.Form().DBloodPressure() != null && !(new RegExp("^[0-9]{1,3}$")).test(self.Form().DBloodPressure())) {
            return self.FormData.notifications.dbloodPresure[2];
        } else if (self.Form().DBloodPressure() != null && (self.Form().DBloodPressure() < 60 || self.Form().DBloodPressure() > 130)) {
            return self.FormData.notifications.dbloodPresure[1];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.isRaceOther = ko.pureComputed(function () {
        if (self.Form().Race() != null) {
            return self.Form().Race() == "Other" ? true : false;
        } else {
            return false;
        }
    }, self);

    self.ageValidation = ko.pureComputed(function () {

        var i = self.FormData.notifications.blank[0];
        if (self.Form().Age() == null && self.validate() == true) {
            i = self.FormData.notifications.age[0];
        } else if (self.Form().Age() != null && !(new RegExp("^[0-9]{1,2}[.]{0,1}[0-9]{1,2}$")).test(self.Form().Age())) {
            i = self.FormData.notifications.age[1];
        } else if (self.Form().Age() != null && (self.Form().Age() < 20 || self.Form().Age() > 75)) {
            i = self.FormData.notifications.age[1];
        } else {
            self.Form().Age(Math.round(self.Form().Age()));
            i = self.FormData.notifications.blank[0];
        }
        return i;
    }, self);
    self.ageValidation.subscribe(function () {
        if (self.ageValidation().id === 2) {
            self.resetBaselineValues();
            self.Form().VisitTypeUI(undefined);
            self.Form().VisitType(false);
            self.validate(false);
        }
    });

    self.invalidAgeValue = ko.pureComputed(function () {

        return (self.ageValidation().id === 2 && !isNaN(self.Form().Age())) ? true : false;
    }, self);
    self.sexValidation = ko.pureComputed(function () {
        if (self.Form().Sex() == null && self.validate() == true) {
            return self.FormData.notifications.sex[0];
        } else {
            return self.FormData.notifications.blank[0];
        }
    }, self);
    self.numberTrim = function (value, unit) {
        var number = value;
        if (number == null) {
            number = 0;
        }
        number = parseFloat(number).toFixed(4);
        if (!unit) {
            number = parseFloat(number).toFixed(0);
        }
        return number;
    };
    self.percentageFormat = function (value) {
        if (value !== 'NA' && !isNaN(value)) {
            return (value * 100).toFixed(1) + '%';
        } else {
            return value == 'NA' ? 'NA<sup>¶</sup>' : '~';
        }
    };

    self.quiteSmoking = ko.pureComputed(function () {
        var i = false;
        if (self.Form().Smoker() == "Former") {
            i = true;
        } else {
            self.Form().QuiteSmokingMonths(undefined);
        }
        return i;
    });
    self.smokingSelectValidation = ko.pureComputed(function () {
        return self.FormData.notifications.blank[0];
    }, self);
    self.Form().Smoker.subscribe(function (newValue) {
        self.Form().BaselineSmoker(null);
        if (self.Form().Smoker() == "Current") {
            self.FormData.treatmentOne[0].enable(true);
            self.FormData.treatmentTwo[0].enable(true);
            self.FormData.treatmentThree[0].enable(true);
        } else {
            self.FormData.treatmentOne[0].enable(false);
            self.FormData.treatmentTwo[0].enable(false);
            self.FormData.treatmentThree[0].enable(false);

            var isSmoking = ko.utils.arrayFirst(self.Form().TratmentOne_selected(), function (item) {
                return item.therapyText === 'Smoking Cessation';
            });
            if (isSmoking) {
                self.Form().TratmentOne_selected.remove(appmodel.FormData.treatmentOne[0]);
            }
            isSmoking = ko.utils.arrayFirst(self.Form().TratmentTwo_selected(), function (item) {
                return item.therapyText === 'Smoking Cessation';
            });
            if (isSmoking) {
                self.Form().TratmentTwo_selected.remove(appmodel.FormData.treatmentTwo[0]);
            }
            isSmoking = ko.utils.arrayFirst(self.Form().TratmentThree_selected(), function (item) {
                return item.therapyText === 'Smoking Cessation';
            });
            if (isSmoking) {
                self.Form().TratmentThree_selected.remove(appmodel.FormData.treatmentThree[0]);
            }
        }
    });
    //Calculator viewmodel code ends


    /* doNavigation() function is for toggling selected active css class on header and footer tab navigation.
    * @param data: contains the current element selector value.
    */
    self.tabNavigation = function (data) {
        $(window).scrollTop($('body').offset().top);
        if (data === 'advice') {
            if (appmodel.Form().showAdviceBtn()) {
                window.location.href = '#!/content/advice/';
                $('#calculator-Tab, #disclaimer-Tab, #about-Tab, #resources-Tab').removeClass('selected');
                $('#recommendation-Tab').addClass('selected');
            } else {
                window.location.href = '#!/content/calculator/';
                $('#recommendation-Tab, #disclaimer-Tab, #about-Tab, #resources-Tab').removeClass('selected');
                $('#calculator-Tab').addClass('selected');
            }
        } else {
            window.location.href = '#!/content/calculator/';
            $('#recommendation-Tab, #disclaimer-Tab, #about-Tab, #resources-Tab').removeClass('selected');
            $('#calculator-Tab').addClass('selected');
            appmodel.Form().baselineLDLC.warningClass('');
            appmodel.Form().nonHDLC.warningClass('');
        }
    };
    /*
     sendEmail function iis used to draft email.
    */
    self.sendEmail = function () {
        var breakline = '%0D%0A';
        var linebreak = "%0D%0A";
        var doublelinebreak = linebreak + linebreak;
        var emailText, subject, message, group_type, group_options, statin, dose, intensity;
        var datetime = new Date();
        var timestamp = (datetime.getMonth() + 1) + '/' + datetime.getDate() + '/' + datetime.getFullYear() + ' ' + dateFormatter(datetime.getHours()) + ':' + dateFormatter(datetime.getMinutes());
        emailText = self.Form().FormData().emailTemplate;

        if (self.Form().patientGroupType() == 'primary') {
            group_type = 'Primary Prevention';
        } else {
            group_type = 'Secondary Prevention';
        }
        var patientGroupID = self.Form().patientBenefitGroup();
        if (patientGroupID === 'group2c' || patientGroupID === 'group3') {
            if (self.Form().UnitOfMeasure()) {
                self.Form().groupBaselineLDLC(' ≥ 4.921 mmol/L');
            } else {
                self.Form().groupBaselineLDLC(' ≥ 190 mg/dL');
            }
        } else {
            if (self.Form().UnitOfMeasure()) {
                self.Form().groupBaselineLDLC(' 1.813-4.920 mmol/L');
            } else {
                self.Form().groupBaselineLDLC(' 70-189 mg/dL');
            }
        }
        var LDLReduction = encodeURIComponent(self.Form().LDLReduction() ? self.Form().LDLReduction() : 'Not Calculated');
        var currentLDLC = self.Form().currentLDLC() + ' ' + self.Form().UnitOfMeasureType();
        var baselineLDLC = self.Form().baselineLDLC() ? self.Form().baselineLDLC() + ' ' + self.Form().UnitOfMeasureType() : 'None Entered';
        var nonHDLC = self.Form().nonHDLC() + ' ' + self.Form().UnitOfMeasureType();

        var AccSuggestedLDLReduction = encodeURIComponent(self.Form().LDLTherapyTable().recommended_reduction.replace('<br/>', 'or'));
        var AccSuggestedLDLC;
        var AccSuggestednonHDLC;
        if (self.Form().UnitOfMeasure()) {
            AccSuggestedLDLC = self.Form().LDLTherapyTable().recommended_LDL_C_mmol + ' ' + self.Form().UnitOfMeasureType();
            AccSuggestednonHDLC = self.Form().LDLTherapyTable().recommended_non_HDL_C_mmol + ' ' + self.Form().UnitOfMeasureType();
        } else {
            AccSuggestedLDLC = self.Form().LDLTherapyTable().recommended_LDL_C_mg + ' ' + self.Form().UnitOfMeasureType();
            AccSuggestednonHDLC = self.Form().LDLTherapyTable().recommended_non_HDL_C_mg + ' ' + self.Form().UnitOfMeasureType();
        }
        subject = emailText.subjectLine;
        subject = subject.replace('#groupType#', group_type);
        subject = subject.replace('#timestamp#', timestamp);
        message = emailText.headLine.replace('#timestamp#', timestamp);

        if (patientGroupID != '') {
            currentStatin = emailText.currentStatin.replace('#statin#', self.Form().currentStatin());
            currentStatin = currentStatin.replace('#dose#', self.Form().currentStatinDose());
            currentStatin = currentStatin.replace('#intensity#', self.Form().doseValueChange());
            message += currentStatin;
        }
        patientGroup = emailText.patientGroup.replace('#groupType#', group_type);
        message += patientGroup;
        groupAdvice = self.Form().FormData().emailGroupAdvice[patientGroupID];
        groupAdvice = groupAdvice.replace('#groupBaselineLDLC#', self.Form().groupBaselineLDLC());
        patientNumbers = emailText.patientNumbers.replace('#LDLCReduction#', LDLReduction);
        patientNumbers = patientNumbers.replace('#CurrentLDLC#', currentLDLC);
        patientNumbers = patientNumbers.replace('#BaselineLDLC#', baselineLDLC);
        patientNumbers = patientNumbers.replace('#NonHDLC#', nonHDLC);
        if (patientGroupID === 'group5') {
            groupAdvice = groupAdvice.replace('#patientNumbers#', patientNumbers);
            groupAdvice = groupAdvice.replace('----Increase to high intensity statin if needed %0D%0A', '');
        } else {
            groupAdvice = groupAdvice.replace('#patientNumbers#', patientNumbers);
        }
        accSuggestedNumbers = emailText.accSuggestedNumbers.replace('#AccSuggestedLDLReduction#', AccSuggestedLDLReduction);
        accSuggestedNumbers = accSuggestedNumbers.replace('#AccSuggestedLDLC#', AccSuggestedLDLC);
        accSuggestedNumbers = accSuggestedNumbers.replace('#AccSuggestednonHDLC#', AccSuggestednonHDLC);
        groupAdvice = groupAdvice.replace('#accSuggestedNumbers#', accSuggestedNumbers);
        message += groupAdvice;
        message += doublelinebreak;
        message += doublelinebreak;
        message += emailText.disclaimer;

        if (isNativeApplication) {
            cordova.plugins.email.open({
                to: '',
                cc: '',
                bcc: '',
                subject: subject,
                body: decodeURI(message.replace(new RegExp('%0D%0A', 'g'), '<br>')),
                isHtml: true
            });
        } else {
            mymail = 'mailto:?subject=' + subject + '&body=' + message + '';
            window.location.href = mymail;
        }
    };
    self.criticalNotification = ko.observableArray([]);
    self.appStoreURL = ko.observable(notification.appStoreURL);
    self.notificationData = ko.observableArray([]);
}

/* formObject function is main for build application logic.
* @param data: application data.
*/
function formObject(data) {
    var self = this, yes = true, no = false, isSession = true, isReductionAction = false;
    var unit = 0.0259;
    var reductionTableData = [];
    self.FormData = ko.observable(formdata); //cannot be removed as it is required in statinValues
    self.UnitOfMeasure = ko.observable(false);
    self.UnitOfMeasureType = ko.observable('mg/dL');
    self.calculatedBenefitGroup = ko.observable('');
    self.patientGroupType = ko.observable('');
    self.patientBenefitGroup = ko.observable('');
    self.groupBaselineLDLC = ko.observable('');
    self.takeAstatin = ko.observable('');
    self.baselineLDLC_range = ko.observable('');
    self.ascvd = ko.observable('');
    self.ageRange = ko.observable('');
    self.comorbidities = ko.observable('');
    self.diabetes = ko.observable('');
    self.ascvd10yr = ko.observable('');
    self.showAgeRange = ko.observable(false);
    self.showComorbidities = ko.observable(false);
    self.showDiabetes = ko.observable(false);
    self.showAscvd10yr = ko.observable(false);
    self.helpMeChooseWarningMsg = ko.observable(false);
    self.showHelpmeChooseAction = ko.observable(false);
    self.showPatientDetails = ko.observable(false);
    self.showNonHDLC = ko.observable(false);
    self.ldlArray = ko.observableArray([]);
    self.currentLDLC = ko.observable().extend({ numeric: { minUS: 40, maxUS: 999, minSI: 1.036, maxSI: 25.874, inputID: 'currentLDLC' } });
    self.currentLDLCValue = ko.observable();
    self.idCurrentLDLCgtBL = ko.observable(false);
    self.nonHDLC = ko.observable().extend({ numeric: { minUS: 40, maxUS: 999, minSI: 1.036, maxSI: 25.874, inputID: 'nonHDLC' } });
    self.nonHDLCLock = ko.observable(false);
    self.totalCholesterol = ko.observable().extend({ numeric: { minUS: 40, maxUS: 999, minSI: 1.036, maxSI: 25.874, inputID: 'totalCholesterol' } });
    self.hdlCholesterol = ko.observable().extend({ numeric: { minUS: 40, maxUS: 999, minSI: 1.036, maxSI: 25.874, inputID: 'hdlCholesterol' } });
    self.triglycerides = ko.observable().extend({ numeric: { minUS: 40, maxUS: 999, minSI: 1.036, maxSI: 25.874, inputID: 'triglycerides' } });
    self.currentStatin = ko.observable('');
    self.statinValues = ko.observable(self.FormData().statins); //changed to D capital as hyperT and as formData in formdata.js file for ldlc
    self.statinSelectedValue = ko.observable();
    self.currentStatinDose = ko.observable('');
    self.doseValues = ko.observable([{ 'title': '', 'intensity': '' }]);
    self.doseValueChange = ko.observable();
    self.baselineLDLC = ko.observable().extend({ pretreatmentBaselineHDLC: { inputID: 'baselineLDLC' } });;
    self.baselineValueMgDL = ko.observable();
    self.suggestedLDLC = ko.observable();
    self.suggestedLDLCReduction = ko.observable();
    self.LDLTherapyTable = ko.observable([]);
    self.LDLReduction = ko.observable();
    self.isAcceptedTreatment = ko.observable('');
    self.isAdditionalReduction = ko.observable('');
    self.showIsAcceptedTreatment = ko.observable(false);
    self.highRiskMarkers = ko.observable('');
    self.showHighRiskMarker = ko.observable(false);
    self.reductionWarningClass = ko.observable('');
    self.showAdditionalReduction = ko.observable(false);
    self.additionalReduction = ko.observable('');
    self.reductionPercent = ko.observable('');
    self.showAdviceBtn = ko.observable(false);
    self.showWarningMsg = ko.observable(false);
    self.showLDLTherapyTable = ko.observable(false);
    self.showLDLTherapyBtn = ko.observable(false);
    self.showNoAdvice = ko.observable(false);

    //for calculator

    self.RiskFormula = new Formula(data);
    self.Age = ko.observable();
    self.triglyceridesRange = ko.observable('');
    self.triglyceridesRangeValue = ko.observable('');
    self.ldlcRange = ko.observable('');
    self.ldlcRangeValue = ko.observable('');
    self.asvd10yrrisk = ko.observable('');
    self.asvd10yrriskValue = ko.observable('');
    self.showAdviceBtn = ko.observable(false);
    self.highRisk = ko.observable('');
    self.showAdviceContent = ko.observable('');
    self.showWarningMsg = ko.observable(false);
    self.showDoneBtn = ko.observable(false);

    // Input Observables for calculator
    self.Race = ko.observable();
    self.Sex = ko.observable();
    self.HDLCholesterolValue = ko.observable();
    self.TotalCholesterolValue = ko.observable();
    self.LDLCholesterolValue = ko.observable();
    self.BloodPressure = ko.observable();
    self.DBloodPressure = ko.observable();
    self.Diabetic = ko.observable();
    self.Smoker = ko.observable();
    self.Hypertension = ko.observable();
    self.VisitType = ko.observable(false);
    self.VisitTypeUI = ko.observable(undefined);
    self.BaselineSmoker = ko.observable();
    self.BaselineHypertension = ko.observable();

    //Treatment scenario - calculator
    self.isTreatmentOne = ko.observable(true);
    self.isTreatmentTwo = ko.observable(false);
    self.isTreatmentThree = ko.observable(false);
    // Unit of Measure - System is defaulted to false which equals US units - calculator
    self.UnitOfMeasure = ko.observable(false).extend({
        rateLimit: 10
    }); //rateLimit added because of compare value resetting due to synchronous knockout value update

    //calculator
    self.UOMChange = function (newValue) {
        var hdl = self.HDLCholesterolValue();
        var totc = self.TotalCholesterolValue();
        var ldl = self.LDLCholesterolValue();

        var bhdl = self.BaselineHDLCholesterolValue();
        var btotc = self.BaselineTotalCholesterolValue();
        var bldl = self.BaselineLDLCholesterolValue();
        var m = .0259;
        if (newValue) {
            if (hdl != null && hdl != "" && isNaN(hdl) == false)
                self.HDLCholesterolValue((hdl * m).toFixed(3));
            if (totc != null && totc != "" && isNaN(totc) == false)
                self.TotalCholesterolValue((totc * m).toFixed(3));
            if (ldl != null && ldl != "" && isNaN(ldl) == false)
                self.LDLCholesterolValue((ldl * m).toFixed(3));

            if (bhdl != null && bhdl != "" && isNaN(bhdl) == false)
                self.BaselineHDLCholesterolValue((bhdl * m).toFixed(3));
            if (btotc != null && btotc != "" && isNaN(btotc) == false)
                self.BaselineTotalCholesterolValue((btotc * m).toFixed(3));
            if (bldl != null && bldl != "" && isNaN(bldl) == false)
                self.BaselineLDLCholesterolValue((bldl * m).toFixed(3));

        } else {
            if (hdl != null && hdl != "" && isNaN(hdl) == false)
                self.HDLCholesterolValue((hdl / m).toFixed(0));
            if (totc != null && totc != "" && isNaN(totc) == false)
                self.TotalCholesterolValue((totc / m).toFixed(0));
            if (ldl != null && ldl != "" && isNaN(ldl) == false)
                self.LDLCholesterolValue((ldl / m).toFixed(0));

            if (bhdl != null && bhdl != "" && isNaN(bhdl) == false)
                self.BaselineHDLCholesterolValue((bhdl / m).toFixed(0));
            if (btotc != null && btotc != "" && isNaN(btotc) == false)
                self.BaselineTotalCholesterolValue((btotc / m).toFixed(0));
            if (bldl != null && bldl != "" && isNaN(bldl) == false)
                self.BaselineLDLCholesterolValue((bldl / m).toFixed(0));
        }
    };

    self.UOMAction = function () {
        self.UOMChange(self.UnitOfMeasure());
        return true;
    };
    // Recalculate the Cholesterol Values based on Unit of Measure. The Algorythms are based on US units. 
    self.HDLCholesterolValue.subscribe(function (newValue) {
        if (newValue != undefined)
            self.HDLCholesterolValue(self.HDLCholesterolValue().replace(/,/g, "."));
    });

    self.TotalCholesterolValue.subscribe(function (newValue) {
        if (newValue != undefined)
            self.TotalCholesterolValue(self.TotalCholesterolValue().replace(/,/g, "."));

    });
    self.LDLCholesterolValue.subscribe(function (newValue) {
        if (newValue != undefined)
            self.LDLCholesterolValue(self.LDLCholesterolValue().replace(/,/g, "."));
    });
    self.HDLCholesterol = ko.pureComputed(function () {
        var i = self.HDLCholesterolValue()
        var m = self.UnitOfMeasure() ? .0259 : 1;
        var value = i / m;
        return value;
    }, self);
    self.TotalCholesterol = ko.pureComputed(function () {
        var i = self.TotalCholesterolValue()
        var m = self.UnitOfMeasure() ? .0259 : 1;
        var value = i / m;
        return value;
    }, self);
    self.LDLCholesterol = ko.pureComputed(function () {
        var i = self.LDLCholesterolValue()
        var m = self.UnitOfMeasure() ? .0259 : 1;
        var value = i / m;
        return value;
    }, self);

    //Subscription to "User Changes" to calculate 10year risks
    self.VisitTypeUI.subscribe(function () {
        if (self.VisitTypeUI() == undefined)
            return;
        self.VisitType(self.VisitTypeUI());
        if (!self.VisitTypeUI() && self.Smoker() == 'Former') {
            //self.Smoker('No');
            //self.InitialVisitText('Initial Visit');
        } else {
            appmodel.resetBaselineValues();
            appmodel.validate(false);
            appmodel.baselineValidate(false);
        }
    });
    // Risk Bar Range

    self.riskRange = ko.pureComputed(function () {
        var Risk = (self.TenYearCurrentRisk() != undefined) ? parseFloat(self.TenYearCurrentRisk()) : undefined;
        var InvalidLDLRange = (self.LDLCholesterol() <= 69 || self.LDLCholesterol() >= 190);
        if (Risk > 0 && Risk <= 4.9 && !InvalidLDLRange) {
            return "Low";
        } else if (Risk >= 5 && Risk <= 7.4 && !InvalidLDLRange) {
            return "Borderline";
        } else if (Risk >= 7.5 && Risk <= 19.9 && !InvalidLDLRange) {
            return "Intermediate";
        } else if (Risk >= 20 && !InvalidLDLRange) {
            return "High";
        } else if (InvalidLDLRange) {
            return "N/A";
        } else {
            return " ";
        }
    }, self);

    self.previousRiskRange = ko.pureComputed(function () {
        var previousRisk = parseFloat(self.TenYearRiskInitial().slice(0, self.TenYearRiskInitial().length - 1));
        if (previousRisk >= 0 && previousRisk <= 4.9) {
            return "Low";
        } else if (previousRisk >= 5 && previousRisk <= 7.4) {
            return "Borderline";
        } else if (previousRisk >= 7.5 && previousRisk <= 19.9) {
            return "Intermediate";
        } else if (previousRisk >= 20) {
            return "High";
        } else {
            return " ";
        }
    }, self);

    // stop computed if these are not met
    self.computedValuesAvailable = ko.pureComputed(function () {
        var formatRegex = new RegExp("^([0-9]{1,3}|0)([,.]{1}[0-9]{1,3})?$"),
            bpFormatReg = new RegExp("^[0-9]{1,3}$"),
            quitSmokingSelected = (self.Smoker() == "Former" && self.QuiteSmokingMonths() == undefined) ? false : true;

        var statinAspirinAvailable = self.VisitType() ? (self.OnAspirin() != undefined || self.OnAspirin() != null) && (self.OnStatin() != undefined || self.OnStatin() != null) : true;
        if (self.VisitType() != undefined && quitSmokingSelected && self.Sex() && self.Age() != null && self.Age() >= 40 && self.Age() <= 79 && self.Race() && self.HDLCholesterol() != null && self.HDLCholesterol() >= 20 && self.HDLCholesterol() <= 100 /*&& ldlCholesterol >= 30 && ldlCholesterol <= 300 && (parseFloat(ldlCholesterol.toFixed(3)) <= parseFloat((self.TotalCholesterol() - self.HDLCholesterol()).toFixed(3)))*/ && self.BloodPressure() != null && self.BloodPressure() >= 90 && self.BloodPressure() <= 200 /*&& self.DBloodPressure() != null && self.DBloodPressure() >= 60 && self.DBloodPressure() <= 130*/ && self.TotalCholesterol() != null && self.TotalCholesterol() >= 130 && self.TotalCholesterol() <= 320 && formatRegex.test(self.TotalCholesterolValue()) && /*formatRegex.test(self.LDLCholesterolValue()) &&*/ formatRegex.test(self.HDLCholesterolValue()) && bpFormatReg.test(self.BloodPressure()) /*&& bpFormatReg.test(self.DBloodPressure())*/ && (self.Diabetic() != null || self.Diabetic() != undefined) && (self.Smoker() != null || self.Smoker() != undefined) && (self.Hypertension() != null || self.Hypertension() != undefined) && statinAspirinAvailable) {
            return true;
        } else {
            return false;
        }
    }, self);
    self.isRealNumber = function ($object) {
        if (!isNaN($object) && $object != null && $object) {
            return true;
        }
        return false;
    }
    self.isAfrican = ko.pureComputed(function () {
        var i = false;
        if (self.Race() == "African American") i = true;
        return i;
    }, self);
    self.isMale = ko.pureComputed(function () {
        var i = false;
        if (self.Sex() == "Male") i = true;
        return i;
    }, self);
    self.isFemale = ko.pureComputed(function () {
        var i = false;
        if (self.Sex() == "Female") i = true;
        return i;
    }, self);
    self.isDiabetic = ko.pureComputed(function () {
        var i = false;
        if (self.VisitType()) {
            if (self.Diabetic() == "Yes" || self.BaselineDiabetic() == "Yes") i = true;
        } else {
            if (self.Diabetic() == "Yes") i = true;
        }
        return i;
    }, self);
    self.isBaseLineDiabetic = ko.pureComputed(function () {
        var i = false;
        if (self.BaselineDiabetic() == "Yes") i = true;
        return i;
    }, self);
    self.isSmoker = ko.pureComputed(function () {
        var i = false;
        if (self.Smoker() == "Never" && self.VisitType()) {
            self.BaselineSmoker("No");
        }
        if (self.Smoker() == "Current") i = true;
        return i;
    }, self);
    self.isBaseLineSmoker = ko.pureComputed(function () {
        var i = false;
        if (self.BaselineSmoker() == "Yes") i = true;
        return i;
    }, self);
    self.isHypertension = ko.pureComputed(function () {
        var i = false;
        if (self.Hypertension() == "Yes" || self.BaselineHypertension() == "Yes") i = true;
        return i;
    }, self);
    self.isBaseLineHypertension = ko.pureComputed(function () {
        var i = false;
        if (self.BaselineHypertension() == "Yes") i = true;
        return i;
    }, self);

    //Store 10 year current risk Calculated value
    self.TenYearCurrentRisk = ko.observable(0);

    // 10 year Calculated Values
    self.TenYearRisk = ko.pureComputed({
        read: function () {
            var i = '~';
            if (self.computedValuesAvailable() && !self.VisitType() && !isNaN(self.RiskFormula.cvdPredict(true))) {
                var number = self.RiskFormula.cvdPredict(true) * 100;
                self.TenYearCurrentRisk(parseFloat(number.toFixed(1)));
                i = number.toFixed(1);
                self.showDoneBtn(true);

            } else if (self.computedValuesAvailable() && self.computedBaselineValuesAvailable() && self.VisitType()) {
                i = self.RiskFormula.TenYearFollowUpRisk();
                self.TenYearCurrentRisk(parseFloat(i.split("%")[0]));
            }
            return i;

        },
        write: function (value) {
            sessionStorage.setItem('TenYearRisk', value);
        },
        owner: self
    }).extend({
        notify: 'always'
    });


    //10 year ASCVD initial risk at follow up
    self.TenYearRiskInitial = ko.pureComputed(function () {
        var i = '~';
        if (self.computedBaselineValuesAvailable() && self.VisitType()) {
            i = self.RiskFormula.TenYearBaselineRisk();
        }
        return i;
    }, self);


    var TreatmentGuidelineData = function () {
        this.isStatinGuidelineVisible = ko.observable(false);
        this.isBPGuidelineVisible = ko.observable(false);
        this.isAspirinGuidelineVisible = ko.observable(false);
        this.resetAll = function () {
            this.isStatinGuidelineVisible(false);
            this.isBPGuidelineVisible(false);
            this.isAspirinGuidelineVisible(false);
        }
    }
    // Forecast- Treatment scenarios
    self.TratmentGuidelineData = new TreatmentGuidelineData();
    self.TratmentOne_selected = ko.observableArray([]);
    self.TratmentTwo_selected = ko.observableArray([]);
    self.TratmentThree_selected = ko.observableArray([]);
    self.TreatmentOneScore = ko.pureComputed(function () {
        var Score = '~';
        if (self.TratmentOne_selected().length > 0) {
            Score = self.CalculateForecastRisk(self.TratmentOne_selected(), self.VisitType());
        }
        return Score;
    }, self);

    self.TreatmentThreeScore = ko.pureComputed(function () {
        var Score = '~';
        if (self.TratmentThree_selected().length > 0) {
            Score = self.CalculateForecastRisk(self.TratmentThree_selected(), self.VisitType());
        }
        return Score;
    }, self);

    self.adjustViewPort = function () {
        var view = viewHeight();
        var mh = (view - 169);
        $(".fullscreen-spacer").css("min-height", mh);
    };

    self.Diabetic.subscribe(function () {
        if (self.VisitType() && self.Diabetic() == 'No') {
            self.BaselineDiabetic(null);
        }
    });

    self.UnitOfMeasureAction = function (data) {
        sessionStorage.setItem('v3uom', data);
    };
    /*
     * UOMAction function is wrapper function which used to handle data persistancy logic.
     */
    self.UOMAction = function () {
        self.UnitOfMeasureAction(self.UnitOfMeasure());
        return true;
    };
    /*
     * setASCVD function is used to set ASCVD question response.
     * @param data: yes|no.
     */
    self.setASCVD = function (data) {
        if (data != '') {
            self.ascvd(data);

        } else {
            self.ascvd('');
        }
        sessionStorage.setItem('ascvd', data);
    };

    self.setHighRisk = function (data) {
        if (data != '') {
            self.highRisk(data);

        } else {
            self.highRisk('');
        }
        sessionStorage.setItem('highRisk', data);
    };

    self.setDiabetic = function (data) {
        if (data != '') {
            self.Diabetic(data);

        } else {
            self.Diabetic('');
        }
        sessionStorage.setItem('Diabetic', data);
    };

    self.resetAll = function () {
        self.Age(undefined);
        self.triglyceridesRange(null);
        self.highRisk(null);
        self.ldlcRange(null);
        self.Diabetic(null);
        self.ascvd(null);
        self.asvd10yrrisk(null);
        self.showAdviceBtn(false);
        sessionStorage.setItem('Age', '');
    };


    self.Age.subscribe(function (data) {
        if (data != '') {
            self.triglyceridesRange(null);
            self.highRisk(null);
            self.ldlcRange(null);
            self.Diabetic(null);
            self.ascvd(null);
            self.asvd10yrrisk(null);
            self.showAdviceBtn(false);

            if (!isNaN(data)) {
                sessionStorage.setItem('Age', data);
            }
        }
    });
    self.triglyceridesRange.subscribe(function (data) {
        $('input[type=radio][name=primary-switch]').change(function () {
            sessionStorage.removeItem('v4ascvd');
            sessionStorage.removeItem('v4Diabetic');
            sessionStorage.removeItem('asvd10yrrisk');
            sessionStorage.removeItem('ldlcRange');
            sessionStorage.removeItem('highRisk');
        });

        if (data == "group3") {
            self.showAdviceBtn(true);
        } else if (data == "group2" && self.Age() < 40) {
            self.showAdviceBtn(true);
        } else if (data == "group2" && self.Age() > 40) {
            self.showAdviceBtn(false);
        } else if (data == "group1") {
            self.showAdviceBtn(false);
        }

        if (self.Age() < 40) {
            if (data == 'group1') {
                self.highRisk(null);
                self.ldlcRange(null);
                self.Diabetic(null);
                self.ascvd(null);
                self.asvd10yrrisk(null);
                self.showAdviceBtn(false);
                self.TenYearRiskAction('cancel');
            } else if (data == 'group2' || data == 'group3') {
                self.highRisk(null);
                self.ldlcRange(null);
                self.Diabetic(null);
                self.ascvd(null);
                self.asvd10yrrisk(null);
                self.TenYearRiskAction('cancel');

            }
        } else if (self.Age() >= 40) {

            if (data == 'group1') {
                self.highRisk(null);
                self.ldlcRange(null);
                self.Diabetic(null);
                self.ascvd(null);
                self.asvd10yrrisk(null);
                self.showAdviceBtn(false);
                self.TenYearRiskAction('cancel');

            } else if (data == 'group2') {
                self.highRisk(null);
                self.ldlcRange(null);
                self.Diabetic(null);
                self.ascvd(null);
                self.asvd10yrrisk(null);
                self.showAdviceBtn(false);
                self.TenYearRiskAction('cancel');


            } else if (data == 'group3') {
                self.highRisk(null);
                self.ldlcRange(null);
                self.Diabetic(null);
                self.ascvd(null);
                self.asvd10yrrisk(null);
                self.showAdviceBtn(true);
                self.TenYearRiskAction('cancel');

            }
        }
        if (data != null) {
            sessionStorage.setItem('triglyceridesRange', data);
        }
    });

    self.ldlcRange.subscribe(function (data) {
        if (data == 'group1a' || data == 'group1b' || data == 'group1c') {
            self.showAdviceBtn(true);
        }
        if (data != null) {
            sessionStorage.setItem('ldlcRange', data);
        }
    });
    self.ascvd.subscribe(function (data) {
        if (data == "yes") {
            self.highRisk(null);
            self.ldlcRange(null);
            self.Diabetic(null);
            self.asvd10yrrisk(null);
            self.showAdviceBtn(false);
        } else if (data == "no") {
            self.highRisk(null);
            self.ldlcRange(null);
            self.Diabetic(null);
            self.asvd10yrrisk(null);
            self.showAdviceBtn(false);
        }
        if (data == "yes" && self.triglyceridesRange() == "group2") {
            self.showAdviceBtn(true);
        }
        if (data == "no" && self.triglyceridesRange() == "group2") {
            self.showAdviceBtn(false);
        }
        if (data != null) {
            sessionStorage.setItem('v4ascvd', data);
        }
    });

    self.Diabetic.subscribe(function (data) {
        if (data == "yes") {
            self.highRisk(null);
            self.ldlcRange(null);
            self.asvd10yrrisk(null);
            self.showAdviceBtn(false);
            self.TenYearRiskAction('cancel');
        } else if (data == "no") {
            self.highRisk(null);
            self.ldlcRange(null);
            self.asvd10yrrisk(null);
            self.showAdviceBtn(false);
        }
        if (data == "yes" && self.triglyceridesRange() == "group2") {
            self.showAdviceBtn(true);
        }
        if (data == "no" && self.triglyceridesRange() == "group2") {
            self.showAdviceBtn(false);
        }
        if (data == "yes" && self.triglyceridesRange() == "group1" && self.ascvd() == 'yes') {
            self.showAdviceBtn(true);
        }
        if (data == "no" && self.triglyceridesRange() == "group1" && self.ascvd() == 'yes') {
            self.showAdviceBtn(false);
        } else if (data == "yes" && self.triglyceridesRange() == "group1" && self.ascvd() == 'no' && self.Age() < 40) {
            self.showAdviceBtn(true);
        }
        if (data == "yes" && self.triglyceridesRange() == "group1" && self.ascvd() == 'no' && self.Age() >= 65) {
            self.showAdviceBtn(true);
            if (self.Age() < 65) {
                self.showAdviceBtn(true);
            }
        }
        if (data != null) {
            sessionStorage.setItem('v4Diabetic', data);
        }
    });
    self.TenYearRisk.subscribe(function (data) {
        if (!isNaN(data)) {
            sessionStorage.setItem('TenYearRisk', data);
        } else if (data == '~' && sessionStorage.getItem('TenYearRisk')) {
            self.asvd10yrrisk('');
        }

    });
    self.asvd10yrrisk.subscribe(function (data) {
        $('input[type=radio][name=primary-switch-a]').change(function () {
            self.TenYearRiskAction('cancel');
            self.asvd10yrrisk(data);
        });
        if (data !== '') {
            self.showAdviceBtn(true);

            if (data == 'Low') {
                self.asvd10yrriskValue('Low (<5%)');

            } else if (data == 'Intermediate') {
                self.asvd10yrriskValue('Borderline to Intermediate(5% - 20%)');

            } else if (data == 'High') {
                self.asvd10yrriskValue('High (>=20%)');

            }
        }
        if (data != null) {
            sessionStorage.setItem('asvd10yrrisk', data);
        }
    });
    self.highRisk.subscribe(function (data) {

        if (data && self.triglyceridesRange() == 'group1' && self.ascvd() == 'no' && self.Diabetic() == 'yes') {
            self.showAdviceBtn(true);
        }
        if (data != null) {
            sessionStorage.setItem('highRisk', data);
        }
        if (data == 'yes') {

        } else if (data == 'no') {

        }
    });
    self.showAdviceBtn.subscribe(function (data) {
        if (data == true) {
            sessionStorage.setItem('showAdviceBtn', true);
        } else {
            sessionStorage.setItem('showAdviceBtn', false);
        }
    });
    self.showDoneBtn.subscribe(function (data) {
        if (data == true) {
            sessionStorage.setItem('showDoneBtn', true);
        } else {
            sessionStorage.setItem('showDoneBtn', false);
        }
    });

    self.HDLCholesterolValue(undefined);

    self.TenYearRiskAction = function (data) {
        if (data === 'save') {
            var TenYearRiskValue = parseFloat(self.TenYearRisk());
            if (TenYearRiskValue < 5) {
                self.asvd10yrrisk('Low');

            } else if (TenYearRiskValue >= 5 && TenYearRiskValue < 20) {
                self.asvd10yrrisk('Intermediate');


            } else if (TenYearRiskValue >= 20) {
                self.asvd10yrrisk('High');

            }
            sessionStorage.setItem('Race', self.Race());
            sessionStorage.setItem('Sex', self.Sex());
            sessionStorage.setItem('HDLCholesterolValue', self.HDLCholesterolValue());
            sessionStorage.setItem('TotalCholesterolValue', self.TotalCholesterolValue());
            sessionStorage.setItem('BloodPressure', self.BloodPressure());
            sessionStorage.setItem('Smoker', self.Smoker());
            sessionStorage.setItem('Smoker', self.Hypertension());


        } else if (data == 'cancel') {
            self.Race(undefined);
            self.Sex(null);
            self.HDLCholesterolValue(undefined);
            self.TotalCholesterolValue(undefined);
            self.BloodPressure(undefined);
            self.Smoker(null);
            self.Hypertension(null);
            self.showDoneBtn(false);
            if (self.triglyceridesRange() == 'group3' || (self.triglyceridesRange() == 'group2' && self.Age() < 40)) {
                self.showAdviceBtn(true);
            } else {
                self.showAdviceBtn(false);
            }
        }
    };

    //ascvd form fields
    self.Sex.subscribe(function (newValue) {
        if (newValue != null) {
            sessionStorage.setItem("v2sex", newValue);
        }
    });
    self.Race.subscribe(function (newValue) {
        if (newValue != null) {
            sessionStorage.setItem("v2race", newValue);
        }
    });
    self.BloodPressure.subscribe(function (newValue) {

        sessionStorage.setItem("v2bloodpressure", newValue);
    });
    self.Smoker.subscribe(function (newValue) {
        if (newValue != null) {
            sessionStorage.setItem("v2smoker", newValue);
        }
    });
    self.Hypertension.subscribe(function (newValue) {
        if (newValue != null) {
            sessionStorage.setItem("v2hypertension", newValue);
        }
    });
    self.HDLCholesterol.subscribe(function (newValue) {
        if (newValue != null) {
            sessionStorage.setItem("v2HDLCholesterol", newValue);
        }
    });
    self.TotalCholesterol.subscribe(function (newValue) {
        if (newValue != null) {
            sessionStorage.setItem("v2TotalCholesterol", newValue);
        }
    });

    /* removeClassWarning function is used to remove waring class of question when user click.
     */
    self.removeClassWarning = function (id) {
        if (id !== undefined) {
            $('#' + id).parents('.question.active').removeClass('warning');
        } else {
            $('.help_me_choose_reveal .question.active').removeClass('warning');
        }
    };
    self.addClassActive = function (id) {
        $('#' + id).parents('.question').addClass('active');
    };
    self.removeClassActive = function (id) {
        $('#' + id).parents('.question').removeClass('active');
    };
    //end of calculator code


    /* calculatedBenefitGroup subscribe for handle prevention group.
    * @param data: prevention group type.
    */
    self.calculatedBenefitGroup.subscribe(function (data) {
        if (data !== '') {
            self.showHelpmeChooseAction(true);
            self.showNoAdvice(false);
        } else {
            self.showHelpmeChooseAction(false);
        }
    });
    /* patientGroupType subscribe for handle benefit group.
    * @param data: benefit group type.
    */
    self.patientGroupType.subscribe(function (data) {
        sessionStorage.setItem('patientGroupType', data);
        self.patientBenefitGroup('');
    });
    /* patientBenefitGroup subscribe for handle benefit group.
    * @param data: benefit group type.
    */
    self.patientBenefitGroup.subscribe(function (data) {
        if (data !== '' || data !== undefined) {
            self.showPatientDetails(true);
        } else {
            self.showPatientDetails(false);
        }
        if (data === 'group2a' || data === 'group2b' || data === 'group2c' || data === 'group4_1' || data === 'group4_2' || data === 'group3' || data === 'group5') {
            self.showNonHDLC(true);
        } else {
            self.showNonHDLC(false);
        }
        self.setGroup(data);

        if (isSession) {
            self.resetPatientDetails();
        }
        sessionStorage.setItem('patientBenefitGroup', data);
    });
    /* showPanel function for show|hide question panel.
   * @param ageRange: true|false.
   * @param comorbidities: true|false.
   * @param diabetes: true|false.
   * @param ascvd10yr: true|false.
   */


    self.showPanel = function (ageRange, comorbidities, diabetes, ascvd10yr) {
        self.showAgeRange(ageRange);
        self.showComorbidities(comorbidities);
        self.showDiabetes(diabetes);
        self.showAscvd10yr(ascvd10yr);
    };
    /* setHelpMeChooseOptions function for show|hide question as per specific benefit group.
   * @param takeAstatin: true|false.
   * @param baselineLDLC_range: true|false.
   * @param ascvd: true|false.
   * @param age: true|false.
   * @param comorbidities: true|false.
   * @param diabetes: true|false.
   * @param ascvd10yr: true|false.
   */
    self.setHelpMeChooseOptions = function (takeAstatin, baselineLDLC_range, ascvd, age, comorbidities, diabetes, ascvd10yr) {
        self.showPanel(age ? true : false, comorbidities ? true : false, diabetes ? true : false, ascvd10yr ? true : false);
        self.setTakeAstatin(takeAstatin ? takeAstatin : '');
        self.setASCVD(ascvd ? ascvd : '');
        self.setBaselineLDLC_range(baselineLDLC_range ? baselineLDLC_range : '');
        self.setAge(age ? age : '');
        self.setDiabetes(diabetes ? diabetes : '');
        self.setComorbidities(comorbidities ? comorbidities : '');
        self.setAscvd10yr(ascvd10yr ? ascvd10yr : '');
    };
    /*
     * helpmeChooseAction function for filter benefit groups as per prevention groups category.
     * @param data: benefit group.
    */
    self.helpmeChooseAction = function (data) {
        if (self.calculatedBenefitGroup() !== '') {
            if (self.calculatedBenefitGroup() === 'group2a' || self.calculatedBenefitGroup() === 'group2b' || self.calculatedBenefitGroup() === 'group2c') {
                self.patientGroupType('secondary');
            } else {
                self.patientGroupType('primary');
            }
            self.patientBenefitGroup(self.calculatedBenefitGroup());
        }
    };
    /*
     * setGroup function for set Calculate Patient Group questions|answers on the basis of benefit group selection.
     * @param data: benefit group.
    */
    self.setGroup = function (data) {
        self.showNoAdvice(false);
        if (data == 'group5') {
            self.setHelpMeChooseOptions('yes', '70to189', 'no', '40to75', '', 'no', 'yes');
            self.showHelpmeChooseAction(true);
        } else if (data == 'group2a') {
            self.setHelpMeChooseOptions('yes', '40to189', 'yes', '', 'no', '', '');
            self.showHelpmeChooseAction(true);
        } else if (data == 'group2b') {
            self.setHelpMeChooseOptions('yes', '40to189', 'yes', '', 'yes', '', '');
            self.showHelpmeChooseAction(true);
        } else if (data == 'group2c') {
            self.setHelpMeChooseOptions('yes', 'gte190', 'yes', '', '', '', '');
            self.showHelpmeChooseAction(true);
        } else if (data == 'group3') {
            self.setHelpMeChooseOptions('yes', 'gte190', 'no', '', '', '', '');
            self.showHelpmeChooseAction(true);
        } else if (data == 'group4_1') {
            self.setHelpMeChooseOptions('yes', '70to189', 'no', '40to75', '', 'yes', 'yes');
            self.showHelpmeChooseAction(true);
        } else if (data == 'group4_2') {
            self.setHelpMeChooseOptions('yes', '70to189', 'no', '40to75', '', 'yes', 'no');
            self.showHelpmeChooseAction(true);
        } else {
            self.setHelpMeChooseOptions();
            self.showHelpmeChooseAction(false);
            if (self.patientGroupType() === 'primary') {
                self.setTakeAstatin('yes');
                self.setASCVD('no');
            } else if (self.patientGroupType() === 'secondary') {
                self.setTakeAstatin('yes');
                self.setASCVD('yes');
            }
        }
        if (isSession) {
            self.nonHDLCLock(false);
            sessionStorage.setItem('nonHDLCLock', false);
        }
    };
    /*
     * UnitOfMeasureAction function is for handle unit of measure functionality and unit coversion.
     * @param data: true|false.
     * true|SI
     * false|US
    */
    self.UnitOfMeasureAction = function (data) {
        var baselineLDLC = self.baselineLDLC()
        var currentLDLC = self.currentLDLC();
        var nonHDLC = self.nonHDLC();
        var totalCholesterol = self.totalCholesterol();
        var hdlCholesterol = self.hdlCholesterol();
        var triglycerides = self.triglycerides();
        if (data) {
            self.UnitOfMeasureType('mmol/L');
            if (baselineLDLC != '' && baselineLDLC != undefined)
                self.baselineLDLC((baselineLDLC * unit).toFixed(3));
            if (currentLDLC != '' && currentLDLC != undefined)
                self.currentLDLC((currentLDLC * unit).toFixed(3));
            if (nonHDLC != '' && nonHDLC != undefined)
                self.nonHDLC((nonHDLC * unit).toFixed(3));
            if (totalCholesterol != '' && totalCholesterol != undefined)
                self.totalCholesterol((totalCholesterol * unit).toFixed(3));
            if (hdlCholesterol != '' && hdlCholesterol != undefined)
                self.hdlCholesterol((hdlCholesterol * unit).toFixed(3));
            if (triglycerides != '' && triglycerides != undefined)
                self.triglycerides((triglycerides * unit).toFixed(3));
        } else {
            self.UnitOfMeasureType('mg/dL');
            if (baselineLDLC != '' && baselineLDLC != undefined)
                self.baselineLDLC(Number((baselineLDLC / unit).toFixed(2)));
            if (currentLDLC != '' && currentLDLC != undefined)
                self.currentLDLC(Number(((currentLDLC / unit).toFixed(2))));
            if (nonHDLC != '' && nonHDLC != undefined)
                self.nonHDLC(Number(((nonHDLC / unit).toFixed(2))));
            if (totalCholesterol != '' && totalCholesterol != undefined)
                self.totalCholesterol(Number(((totalCholesterol / unit).toFixed(2))));
            if (hdlCholesterol != '' && hdlCholesterol != undefined)
                self.hdlCholesterol(Number(((hdlCholesterol / unit).toFixed(2))));
            if (triglycerides != '' && triglycerides != undefined)
                self.triglycerides(Number(((triglycerides / unit).toFixed(2))));
        }
        sessionStorage.setItem('v3uom', data);
    };
    /*
     * UOMAction function is wrapper function which used to handle data persistancy logic.
    */
    self.UOMAction = function () {
        self.UnitOfMeasureAction(self.UnitOfMeasure());
        return true;
    };
    /*
     * setTakeAstatin function is used set|get take statin input values
    * @param data: yes|no
    */
    self.setTakeAstatin = function (data) {
        self.setASCVD('');
        if (data !== '') {
            self.takeAstatin(data);
            self.evaluateBenefitGroup('takeAstatin', data);
        }
        else {
            self.removeClassWarning('takeAstatin');
            self.removeClassActive('takeAstatin');
            self.takeAstatin('');
        }
        sessionStorage.setItem('takeAstatin', data);
    };
    /*
     * baselineLDLC subscriber function is used set|get baselineLDLC input values.
    * @param data
    */
    self.baselineLDLC.subscribe(function (data) {
        if (isSession) {
            if (self.UnitOfMeasure()) {
                self.baselineValueMgDL(self.baselineLDLC() / unit);
            } else {
                self.baselineValueMgDL(self.baselineLDLC());
            }
        }

        if (data != '' && self.baselineLDLC.warningClass() != ' error') {
            /*if(self.baselineLDLC_range() == '40to189'){
                if(self.baselineValueMgDL() >= 40 && self.baselineValueMgDL() <= 189.999){
                    self.baselineLDLC.warningClass(' ');
                }else{
                    self.baselineLDLC('');
                    self.baselineLDLC.warningClass(' warning');
                }
            }else if(self.baselineLDLC_range() == '40to69'){
                if(self.baselineValueMgDL() > 40 && self.baselineValueMgDL() < 70){
                    self.baselineLDLC('');
                    self.baselineLDLC.warningClass(' warning');
                }else{
                    self.baselineLDLC.warningClass(' ');
                }
            }else if(self.baselineLDLC_range() == '70to189'){
                if(self.baselineValueMgDL() >= 70 && self.baselineValueMgDL() <= 189.999){
                    self.baselineLDLC.warningClass(' ');
                }else{
                    self.baselineLDLC('');
                    self.baselineLDLC.warningClass(' warning');
                }
            }else if(self.baselineLDLC_range() == 'gte190'){
                if(self.baselineValueMgDL() < 190){
                    self.baselineLDLC('');
                    self.baselineLDLC.warningClass(' warning');
                }else{
                    self.baselineLDLC.warningClass(' ');
                }
            }else{
                self.setBaselineLDLC_range('');
            }*/
        } else if (data == '' && self.baselineLDLC.warningClass() != ' error') {
            /* self.baselineLDLC.warningClass('');
             self.suggestedLDLC();*/
        }
        if (data != '') {
            sessionStorage.setItem('baselineLDLC', data);
            sessionStorage.setItem('baselineValueMgDL', self.baselineValueMgDL());
        } else {
            sessionStorage.setItem('baselineLDLC', '');
            sessionStorage.setItem('baselineValueMgDL', '');
        }
        self.getLDLTherapyData();
    });
    /*
     * setAccSuggestedLDLC function is used to calculate ACC Suggested LDL-C and suggested LDLC Reduction.
    */
    self.setAccSuggestedLDLC = function () {
        if (self.baselineLDLC() != '' && self.baselineLDLC() !== undefined) {
            if (self.LDLTherapyTable().recommended_reduction != 'undefined') {
                var recommended_reduction;
                if (self.LDLTherapyTable().recommended_reduction === '30-49%') {
                    self.suggestedLDLC((self.baselineLDLC() - (self.baselineLDLC() * 0.30)).toFixed(0) + ' - ' + (self.baselineLDLC() - (self.baselineLDLC() * 0.49)).toFixed(0));
                } else {
                    self.suggestedLDLC('<' + (self.baselineLDLC() - (self.baselineLDLC() * 0.50)).toFixed(0));
                }
            }
        }
        if (self.currentLDLC() != '' && self.currentLDLC() !== undefined) {
            self.suggestedLDLCReduction(Number((Number(self.currentLDLC() - ((self.currentLDLC()) * 0.20))).toFixed(3)));
        }
    };
    /*
     * setBaselineLDLC_range function is used to set baseline LDL-C.
     * @param data: baseline LDL-C range.
    */
    self.setBaselineLDLC_range = function (data) {
        self.setAge('');
        self.setComorbidities('');
        if (data != '') {
            self.baselineLDLC_range(data);
            self.evaluateBenefitGroup('baselineLDLC_range', data);
            sessionStorage.setItem('baselineLDLC_range', data);
        } else {
            self.removeClassWarning('baselineLDLC_range');
            self.removeClassActive('baselineLDLC_range');
            self.baselineLDLC_range('');
            sessionStorage.setItem('baselineLDLC_range', '');
        }
    };
    /*
     * setASCVD function is used to set ASCVD question response.
     * @param data: yes|no.
    */
    self.setASCVD = function (data) {
        self.setBaselineLDLC_range('');
        if (data != '') {
            self.ascvd(data);
            self.evaluateBenefitGroup('ascvd', data);
        } else {
            self.removeClassWarning('ascvd');
            self.removeClassActive('ascvd');
            self.ascvd('');
        }
        sessionStorage.setItem('ascvd', data);
    };
    /*
     * setAge function is used to set Age question response.
     * @param data: Age range.
    */
    self.setAge = function (data) {
        if (self.showAgeRange()) {
            self.setComorbidities('');
            self.setDiabetes('');
        }
        if (data != '') {
            self.ageRange(data);
            self.evaluateBenefitGroup('ageRange', data);
        } else {
            self.removeClassWarning('ageRange');
            self.removeClassActive('ageRange');
            self.ageRange('');
        }
        sessionStorage.setItem('ageRange', data);
    };
    /*
    * setComorbidities function is used to set Comorbidities question response.
    * @param data: yes|no.
   */
    self.setComorbidities = function (data) {
        if (self.showComorbidities()) {
            self.setDiabetes('');
        }

        if (data != '') {
            self.comorbidities(data);
            self.evaluateBenefitGroup('comorbidities', data);
        } else {
            self.removeClassWarning('comorbidities');
            self.removeClassActive('comorbidities');
            self.comorbidities('');
        }
        sessionStorage.setItem('comorbidities', data);
    };
    /*
    * setDiabetes function is used to set Diabetes question response.
    * @param data: yes|no.
   */
    self.setDiabetes = function (data) {
        if (self.showDiabetes()) {
            self.setAscvd10yr('');
        }
        if (data != '') {
            self.diabetes(data);
            self.evaluateBenefitGroup('diabetes', data);
        } else {
            self.removeClassWarning('diabetes');
            self.removeClassActive('diabetes');
            self.diabetes('');
        }
        sessionStorage.setItem('diabetes', data);
    };
    /*
    * setDiabetes function is used to set Ascvd10yr question response.
    * @param data: yes|no.
   */
    self.setAscvd10yr = function (data) {
        if (data != '') {
            self.ascvd10yr(data);
            self.evaluateBenefitGroup('ascvd10yr', data);
        } else {
            self.removeClassWarning('ascvd10yr');
            self.removeClassActive('ascvd10yr');
            self.ascvd10yr('');
        }
        sessionStorage.setItem('ascvd10yr', data);
    };
    /*
    * currentLDLC subscribe function is used to handle current LDL-C.
    * @param data: value.
   */
    self.currentLDLC.subscribe(function (data) {
        if (data != '' && (self.currentLDLC.warningClass() == '' || self.currentLDLC.warningClass() == undefined)) {
            sessionStorage.setItem('currentLDLC', data);
        } else {
            sessionStorage.setItem('currentLDLC', '');
        }
        self.getLDLTherapyData();
    });
    /*
    * nonHDLC subscribe function is used to handle nonHDLC.
    * @param data: value.
   */
    self.nonHDLC.subscribe(function (data) {
        self.evaluateBenefitGroup();
        sessionStorage.setItem('nonHDLC', data);
    });
    /*
    * statinSelectedValue subscribe function is used to handle statin values and set dose on the basis of statin value.
    * @param data: select option value.
   */
    self.statinSelectedValue.subscribe(function (data) {
        self.currentStatin('');
        if (isSession) {
            self.doseValueChange('');
        }
        var statin = $.grep(self.FormData().statins, function (item, index) {
            item.index = index;
            return item.id === data;
        });
        if (statin.length !== 0) {
            var doseValues = self.FormData().statins[statin[0].index].dose;
            self.currentStatin(statin[0].title);
            self.doseValues(doseValues);
        } else {
            self.doseValues([
                { 'title': '', 'intensity': '' }
            ]);
        }
        sessionStorage.setItem('statinSelectedValue', data);
    });
    /*
    * doseValueChange subscribe function is used to handle dose values and set|get dose on the basis of user selection.
    * @param data: select option value.
   */
    self.doseValueChange.subscribe(function (data) {
        var dose = $.grep(self.doseValues(), function (item, index) {
            item.index = index;
            return item.intensity === data;
        });
        if (dose.length !== 0) {
            self.currentStatinDose(dose[0].dose);
        } else {
            self.currentStatinDose('');
        }
        self.getLDLTherapyData();
        sessionStorage.setItem('doseValueChange', data);
    });
    /*
    * setIsAcceptedTreatment function is used to handle Accepted Treatment question.
    * @param data: yes|no.
   */
    self.setIsAcceptedTreatment = function (data) {
        if (self.showLDLTherapyTable()) {
            if (isSession) {
                self.highRiskMarkers('');
                self.setIsAdditionalReduction('');
            }
        }
        if (data != '') {
            self.isAcceptedTreatment(data);
            self.evaluateBenefitGroup('isAcceptedTreatment', data);
        } else {
            self.isAcceptedTreatment('');
        }
        sessionStorage.setItem('isAcceptedTreatment', data);
    };
    /*
    * setIsAdditionalReduction function is used to handle Is Additional Reduction question.
    * @param data:<=20% | > 20%.
   */
    self.setIsAdditionalReduction = function (data) {
        if (data != '') {
            self.isAdditionalReduction(data);
            if (data === 'lte20') {
                self.additionalReduction(20);
            } else {
                self.additionalReduction(21);
            }
            self.evaluateBenefitGroup('isAdditionalReduction', data);
        } else {
            self.isAdditionalReduction('');
            self.additionalReduction('');
        }
        sessionStorage.setItem('isAdditionalReduction', data);
    };
    /*
    * setHighRiskMarkers function is used to handle High Risk Markers question.
    * @param data: yes|no.
   */
    self.setHighRiskMarkers = function (data) {
        if (data != '') {
            self.highRiskMarkers(data);
            self.evaluateBenefitGroup('highRiskMarkers', data);
        } else {
            self.highRiskMarkers('');
        }
        sessionStorage.setItem('highRiskMarkers', data);
    };
    /*
    * additionalReduction function is used to handle Additional reduction question logic.
    * @param data:<=20% | > 20%.
   */
    self.additionalReduction.subscribe(function (data) {
        self.evaluateBenefitGroup('additionalReduction', data);
        sessionStorage.setItem('additionalReduction', data);
    });
    /*
    * lipidPanelAction function is used to handle lipid panel model input and calculate nonHDLC.
    * @param data:save|cancel.
   */
    self.lipidPanelAction = function (data) {
        if (data === 'save') {
            var totalCholesterol = self.totalCholesterol();
            var hdlCholesterol = self.hdlCholesterol();
            var triglycerides = self.triglycerides();
            var isWarning = false;
            if (hdlCholesterol != '' &&
                hdlCholesterol != undefined &&
                totalCholesterol != '' &&
                totalCholesterol != undefined) {
                var total = totalCholesterol - hdlCholesterol;

                self.nonHDLC.touched(true);
                self.nonHDLC(Number(total.toFixed(3)));
                self.nonHDLCLock(true);
                sessionStorage.setItem('totalCholesterol', totalCholesterol);
                sessionStorage.setItem('hdlCholesterol', hdlCholesterol);
                sessionStorage.setItem('triglycerides', triglycerides);
                sessionStorage.setItem('nonHDLCLock', true);
                if (total < 40 || total > 999) {
                    isWarning = true;
                    self.nonHDLCLock(false);
                    self.nonHDLC.warningClass(' warning');
                }
            } else {
                self.nonHDLC('');
                self.nonHDLCLock(false);
                sessionStorage.setItem('totalCholesterol', totalCholesterol);
                sessionStorage.setItem('hdlCholesterol', hdlCholesterol);
                sessionStorage.setItem('triglycerides', triglycerides);
                sessionStorage.setItem('nonHDLCLock', false);
                sessionStorage.setItem('nonHDLC', '');
            }
        } else if (data === 'cancel') {
            self.nonHDLCLock(false);
            sessionStorage.setItem('totalCholesterol', '');
            sessionStorage.setItem('hdlCholesterol', '');
            sessionStorage.setItem('triglycerides', '');
            sessionStorage.setItem('nonHDLCLock', false);
            sessionStorage.setItem('nonHDLC', '');
            self.totalCholesterol('');
            self.hdlCholesterol('');
            self.nonHDLC('');
            self.triglycerides('');
        }
        self.totalCholesterol.warningClass('');
        self.hdlCholesterol.warningClass('');
        if (!isWarning) {
            self.nonHDLC.warningClass('');
        }
        self.triglycerides.warningClass('');
    };
    /*
    * getLDLTherapyData function is used to set LDL Therapy table data and build logic for baseline and currentLDLC validation logic.
   */
    self.getLDLTherapyData = function () {
        if (isSession) {
            self.showLDLTherapyTable(false);
            self.setIsAcceptedTreatment('');
            self.showHighRiskMarker(false);
            self.showAdviceBtn(false);
            self.setHighRiskMarkers('');
        }
        var currentLDLC = self.currentLDLC();

        if (Number(self.baselineLDLC()) >= Number(currentLDLC) && currentLDLC != '' && self.baselineLDLC() != '' && self.baselineLDLC() !== undefined) {
            var LDLReductionValue = ((self.baselineLDLC() - currentLDLC) / self.baselineLDLC()) * 100
            self.LDLReduction((parseFloat(LDLReductionValue.toFixed(1)) + '%'));
            if (self.idCurrentLDLCgtBL()) {
                if (self.currentLDLC.warningClass() == ' error customError') {
                    self.idCurrentLDLCgtBL(false);
                    self.currentLDLC.warningClass(' ');
                } else if (self.currentLDLC.warningClass() == "") {
                    self.idCurrentLDLCgtBL(false);
                }
            }
        } else if (Number(self.baselineLDLC()) < Number(currentLDLC) && self.baselineLDLC() != '' && self.baselineLDLC() !== undefined) {
            var LDLReductionValue = ((self.baselineLDLC() - currentLDLC) / self.baselineLDLC()) * 100
            self.LDLReduction((parseFloat(LDLReductionValue.toFixed(1)) + '%'));
            pattrn = /^\d{0,3}(\.\d{1,3})?$/;
            if (!(pattrn.test(currentLDLC))) {
                self.currentLDLC('');
                self.currentLDLC.warningClass(' error');
            } else {
                self.currentLDLC.warningClass(' error customError');
                self.idCurrentLDLCgtBL(true);
            }
        } else {
            if (self.idCurrentLDLCgtBL() && self.currentLDLC.warningClass() == ' error customError') {
                self.idCurrentLDLCgtBL(false);
                self.currentLDLC.warningClass(' ');
            } else if (self.idCurrentLDLCgtBL() && self.currentLDLC.warningClass() != ' error customError') {
                self.idCurrentLDLCgtBL(false);
            }
            self.LDLReduction('~%');
        }

        if ((currentLDLC !== 0 && currentLDLC !== undefined && currentLDLC !== "") && (self.doseValueChange() !== 0 && self.doseValueChange() !== undefined)) {
            var benefitGroup = self.patientBenefitGroup();
            var intensity = self.doseValueChange();
            var data = $.grep(self.FormData().LDLTherapyData, function (item, index) {
                item.index = index;
                return item.benefitGroup === benefitGroup;
            });
            if (data.length !== 0) {
                if (benefitGroup == 'group5' && intensity != '') {
                    self.LDLTherapyTable(data[0]['intensity'][intensity]);
                } else {
                    self.LDLTherapyTable(data[0]);
                }
                self.showLDLTherapyBtn(true);
            } else {
                self.LDLTherapyTable([]);
            }
        } else {
            self.showLDLTherapyBtn(false);
        }
        self.setAccSuggestedLDLC();
        self.evaluateBenefitGroup();
    };
    self.LDLTherapyBtnAction = function () {
        self.showLDLTherapyTable(true);
    };
    /*
    * resetPatientDetails function is used to reset patient detail section.
   */
    self.resetPatientDetails = function () {
        self.currentLDLC('');
        self.currentLDLC.warningClass('');
        self.nonHDLC('');
        self.nonHDLC.warningClass('');
        self.totalCholesterol('');
        self.totalCholesterol.warningClass('');
        self.hdlCholesterol('');
        self.hdlCholesterol.warningClass('');
        self.triglycerides('');
        self.triglycerides.warningClass('');
        self.statinSelectedValue('');
        self.baselineLDLC('');
        self.baselineLDLC.warningClass('');
    };
    /*
    * resetAll function is used to reset all application input values.
   */
    self.resetAll = function (data) {
        self.patientGroupType('');
        self.patientBenefitGroup('');
        self.setGroup('');
        self.nonHDLCLock(false);
        self.showPatientDetails(false);
        self.showWarningMsg(false);
        self.showAdviceBtn(false);
        self.resetPatientDetails();
        self.showNoAdvice(false);
        $('input[type=number]').val('');
    };
    /*
    * helpMeChooseResetAll function is used to reset calculate Benefit Group input values.
   */
    self.helpMeChooseResetAll = function (data) {
        self.setHelpMeChooseOptions();
        self.showNoAdvice(false);
        self.removeClassWarning();
        self.resetAll();
    };
    /*
    * addClassWarning function is used to add waring class for each question of calculate benefit group input values.
   */
    self.addClassWarning = function () {
        $('.help_me_choose_reveal .question.active').addClass('warning');
    };
    /*
    * removeClassWarning function is used to remove waring class of question when user click.
   */
    self.removeClassWarning = function (id) {
        if (id !== undefined) {
            $('#' + id).parents('.question.active').removeClass('warning');
        } else {
            $('.help_me_choose_reveal .question.active').removeClass('warning');
        }
    };
    self.addClassActive = function (id) {
        $('#' + id).parents('.question').addClass('active');
    };
    self.removeClassActive = function (id) {
        $('#' + id).parents('.question').removeClass('active');
    };
    /*
    * evaluateBenefitGroup function is used to handle path travesing logic on the basis of question inputs.
   */
    self.evaluateBenefitGroup = function (question, answer) {
        if (question !== '') {
            self.removeClassWarning(question);
            self.addClassActive(question);
        }
        if (self.takeAstatin() === "yes") {
            self.removeClassWarning();
            self.showNoAdvice(false);
            self.showHelpmeChooseAction(false);
            if (self.takeAstatin() !== '' && self.ascvd() !== '' && self.baselineLDLC_range() !== '') {
                if (self.takeAstatin() === 'yes' && self.ascvd() === 'yes' && (self.baselineLDLC_range() === '40to189')) {
                    self.showPanel(false, true);
                    if (self.comorbidities() === 'no') {
                        self.calculatedBenefitGroup('group2a');
                        self.showHelpmeChooseAction(true);
                    } else if (self.comorbidities() === 'yes') {
                        self.calculatedBenefitGroup('group2b');
                        self.showHelpmeChooseAction(true);
                    } else {
                        self.showHelpmeChooseAction(false);
                        self.calculatedBenefitGroup('');
                    }
                } else if (self.takeAstatin() === 'yes' && self.ascvd() === 'yes' && self.baselineLDLC_range() === 'gte190') {
                    self.showPanel();
                    self.showHelpmeChooseAction(true);
                    self.calculatedBenefitGroup('group2c');
                }
                else if (self.takeAstatin() === 'yes' && self.ascvd() === 'no' && self.baselineLDLC_range() === '70to189') {
                    self.showPanel(true);
                    if (self.ageRange() === '40to75') {
                        self.showPanel(true, false, true);
                        if (self.diabetes() === 'yes') {
                            self.showPanel(true, false, true, true);
                            if (self.ascvd10yr() === 'yes') {
                                self.calculatedBenefitGroup('group4_1');
                                self.showHelpmeChooseAction(true);
                            } else if (self.ascvd10yr() === 'no') {
                                self.showHelpmeChooseAction(true);
                                self.showHelpmeChooseAction(true);
                                self.calculatedBenefitGroup('group4_2');
                            } else {
                                self.calculatedBenefitGroup('');
                            }
                        } else if (self.diabetes() === 'no') {
                            self.showPanel(true, false, true, true);
                            if (self.ascvd10yr() === 'yes') {
                                self.calculatedBenefitGroup('group5');
                            } else if (self.ascvd10yr() === 'no') {
                                self.calculatedBenefitGroup('');
                                self.addClassWarning();
                                self.showNoAdvice(true);
                                self.helpMeChooseWarningMsg('This app cannot provide advice for the patient profile you have selected.');
                            }
                            else {
                                self.calculatedBenefitGroup('');
                            }
                        } else {
                            self.showPanel(true, false, true, false);
                            self.calculatedBenefitGroup('');
                        }
                    } else if (self.ageRange() !== '' && self.ageRange() !== '40to75') {
                        self.showPanel(true, false, false, false);
                        self.calculatedBenefitGroup('');
                        self.addClassWarning();
                        self.showNoAdvice(true);
                        self.helpMeChooseWarningMsg('This app cannot provide advice for the patient profile you have selected.');
                    } else {
                        self.showPanel(true, false, false);
                        self.calculatedBenefitGroup('');
                    }
                }
                else if (self.takeAstatin() === 'yes' && self.ascvd() === 'no' && self.baselineLDLC_range() === 'gte190') {
                    self.showPanel();
                    self.calculatedBenefitGroup('group3');
                }
                else {
                    self.showPanel();
                    self.calculatedBenefitGroup('');
                    self.addClassWarning();
                    self.helpMeChooseWarningMsg('This app cannot provide advice for the patient profile you have selected.');
                }
            } else {
                self.showPanel();
                self.showHelpmeChooseAction(false);
            }
        } else if (self.takeAstatin() === "no") {
            self.addClassWarning();
            self.showAdviceBtn(false);
            self.showNoAdvice(false);
            self.showPanel();
            self.showHelpmeChooseAction(false);
            self.helpMeChooseWarningMsg('');
            return false;
        } else {
            self.addClassWarning();
            self.showPanel();
            self.showAdviceBtn(false);
            self.showNoAdvice(false);

        }

        if (self.isAcceptedTreatment() !== '') {
            self.showAdditionalReduction(false);
            if (self.patientBenefitGroup() === 'group3') {
                self.showAdditionalReduction(false);
                self.showHighRiskMarker(false);
                if (self.isAcceptedTreatment() === 'yes') {
                    self.showWarningMsg(true);
                    self.showAdviceBtn(false);
                } else if (self.isAcceptedTreatment() === 'no') {
                    self.showWarningMsg(false);
                    self.showAdviceBtn(true);
                } else {

                }

            } else if (self.patientBenefitGroup() === 'group5') {
                self.showAdditionalReduction(false);
                if (self.isAcceptedTreatment() === 'yes') {
                    self.showHighRiskMarker(true);
                    if (self.highRiskMarkers() === 'yes') {
                        self.showWarningMsg(false);
                        self.showAdviceBtn(true);
                    } else if (self.highRiskMarkers() === 'no') {
                        self.showWarningMsg(true);
                        self.showAdviceBtn(false);
                    } else {
                        self.showWarningMsg(false);
                        self.showAdviceBtn(false);
                    }
                } else if (self.isAcceptedTreatment() === 'no') {
                    self.showAdditionalReduction(false);
                    self.showHighRiskMarker(false);
                    self.showWarningMsg(false);
                    self.showAdviceBtn(true);
                } else {

                }
            } else if (self.patientBenefitGroup() === 'group4_1') {
                self.showAdditionalReduction(false);
                self.showHighRiskMarker(false);
                if (self.isAcceptedTreatment() === 'yes') {
                    self.showWarningMsg(true);
                    self.showAdviceBtn(false);
                } else if (self.isAcceptedTreatment() === 'no') {
                    self.showWarningMsg(false);
                    self.showAdviceBtn(true);
                } else {

                }
            } else if (self.patientBenefitGroup() === 'group4_2') {
                self.showAdditionalReduction(false);
                if (self.isAcceptedTreatment() === 'yes') {
                    self.showHighRiskMarker(true);
                    if (self.highRiskMarkers() === 'yes') {
                        self.showWarningMsg(false);
                        self.showAdviceBtn(true);
                    } else if (self.highRiskMarkers() === 'no') {
                        self.showWarningMsg(true);
                        self.showAdviceBtn(false);
                    } else {
                        self.showWarningMsg(false);
                        self.showAdviceBtn(false);
                    }
                } else if (self.isAcceptedTreatment() === 'no') {
                    self.showHighRiskMarker(true);
                    if (self.highRiskMarkers() === 'yes') {
                        self.showWarningMsg(false);
                        self.showAdviceBtn(true);
                    } else if (self.highRiskMarkers() === 'no') {
                        self.showWarningMsg(false);
                        self.showAdviceBtn(true);
                    } else {
                        self.showWarningMsg(false);
                        self.showAdviceBtn(false);
                    }
                } else {

                }
            } else if (self.patientBenefitGroup() === 'group2a') {
                self.showAdditionalReduction(false);
                self.showHighRiskMarker(false);
                if (self.isAcceptedTreatment() === 'yes') {
                    self.showWarningMsg(true);
                    self.showAdviceBtn(false);
                } else if (self.isAcceptedTreatment() === 'no') {
                    self.showWarningMsg(false);
                    self.showAdviceBtn(true);
                } else {

                }
            } else if (self.patientBenefitGroup() === 'group2b') {
                self.showAdditionalReduction(false);
                self.showHighRiskMarker(false);
                if (self.isAcceptedTreatment() === 'yes') {
                    self.showWarningMsg(true);
                    self.showAdviceBtn(false);
                } else if (self.isAcceptedTreatment() === 'no') {
                    self.showWarningMsg(false);
                    self.showAdviceBtn(true);
                } else {

                }
            } else if (self.patientBenefitGroup() === 'group2c') {
                self.showAdditionalReduction(false);
                self.showHighRiskMarker(false);
                if (self.isAcceptedTreatment() === 'yes') {
                    self.showWarningMsg(true);
                    self.showAdviceBtn(false);
                } else if (self.isAcceptedTreatment() === 'no') {
                    self.showWarningMsg(false);
                    self.showAdviceBtn(true);
                } else {

                }
            }

        } else {
            self.showAdditionalReduction(false);
            self.showWarningMsg(false);
        }

        if (self.showAdviceBtn() === true) {
            sessionStorage.setItem('showAdviceBtn', true);
        } else {
            sessionStorage.setItem('showAdviceBtn', false);
        }
    };
    /*
    * appStorage function is used to handle app specific data persistancy.
   */
    self.appStorage = function () {
        isSession = false;
        /*if(sessionStorage.getItem('UnitOfMeasureType') === 'mmol/L'){
            self.UnitOfMeasure(true);
        }else{
            self.UnitOfMeasure(false);
        }*/
        if (sessionStorage.getItem('patientGroupType') != '' && sessionStorage.getItem('patientGroupType') !== 'undefined' && sessionStorage.getItem('patientGroupType') !== null) {
            self.patientGroupType(sessionStorage.getItem('patientGroupType'));
        }
        if (sessionStorage.getItem('patientBenefitGroup') != '' && sessionStorage.getItem('patientBenefitGroup') !== 'undefined' && sessionStorage.getItem('patientBenefitGroup') !== null) {
            self.patientBenefitGroup(sessionStorage.getItem('patientBenefitGroup'));
        }
        if (sessionStorage.getItem('currentLDLC') != '' && sessionStorage.getItem('currentLDLC') !== undefined && sessionStorage.getItem('currentLDLC') !== null) {
            self.currentLDLC(sessionStorage.getItem('currentLDLC'));

            console.log("Session storage fired!", self.currentLDLC.touched(), self.currentLDLC.dirty());
        }
        if (sessionStorage.getItem('nonHDLC') != '' && sessionStorage.getItem('nonHDLC') !== 'undefined' && sessionStorage.getItem('nonHDLC') !== null) {
            self.nonHDLC(sessionStorage.getItem('nonHDLC'));
        }
        if (sessionStorage.getItem('nonHDLCLock') != '' && sessionStorage.getItem('nonHDLCLock') !== undefined && sessionStorage.getItem('nonHDLCLock') !== null && self.nonHDLC() != '') {
            if (sessionStorage.getItem('nonHDLCLock') === "true") {
                self.nonHDLCLock(true);
            } else {
                self.nonHDLCLock(false);
            }
        }
        if (sessionStorage.getItem('totalCholesterol') != '' && sessionStorage.getItem('totalCholesterol') !== 'undefined' && sessionStorage.getItem('totalCholesterol') !== null) {
            self.totalCholesterol(sessionStorage.getItem('totalCholesterol'));
        }
        if (sessionStorage.getItem('hdlCholesterol') != '' && sessionStorage.getItem('hdlCholesterol') !== 'undefined' && sessionStorage.getItem('hdlCholesterol') !== null) {
            self.hdlCholesterol(sessionStorage.getItem('hdlCholesterol'));
        }
        if (sessionStorage.getItem('triglycerides') != '' && sessionStorage.getItem('triglycerides') !== 'undefined' && sessionStorage.getItem('triglycerides') !== null) {
            self.triglycerides(sessionStorage.getItem('triglycerides'));
        }
        if (sessionStorage.getItem('statinSelectedValue') != '' && sessionStorage.getItem('statinSelectedValue') !== 'undefined' && sessionStorage.getItem('statinSelectedValue') !== null) {
            self.statinSelectedValue(sessionStorage.getItem('statinSelectedValue'));
        }
        if (sessionStorage.getItem('doseValueChange') != '' && sessionStorage.getItem('doseValueChange') !== 'undefined' && sessionStorage.getItem('doseValueChange') !== null) {
            self.doseValueChange(sessionStorage.getItem('doseValueChange'));
        }
        if (self.currentLDLC() != '' && self.currentLDLC() !== undefined && self.statinSelectedValue() != '' && self.statinSelectedValue() !== undefined && self.doseValueChange() != '' && self.doseValueChange() !== undefined) {
            self.showLDLTherapyTable(true);
        }
        if (sessionStorage.getItem('baselineValueMgDL') != '' && sessionStorage.getItem('baselineValueMgDL') !== 'undefined' && sessionStorage.getItem('baselineValueMgDL') !== null) {
            self.baselineValueMgDL(sessionStorage.getItem('baselineValueMgDL'));
        }
        if (sessionStorage.getItem('baselineLDLC') != '' && sessionStorage.getItem('baselineLDLC') !== 'undefined' && sessionStorage.getItem('baselineLDLC') !== null) {
            self.baselineLDLC(sessionStorage.getItem('baselineLDLC'));
        }
        if (sessionStorage.getItem('isAcceptedTreatment') != '' && sessionStorage.getItem('isAcceptedTreatment') !== undefined && sessionStorage.getItem('isAcceptedTreatment') !== null) {
            self.setIsAcceptedTreatment(sessionStorage.getItem('isAcceptedTreatment'));
            self.showLDLTherapyTable(true);
        }
        if (sessionStorage.getItem('isAdditionalReduction') != '' && sessionStorage.getItem('isAdditionalReduction') !== undefined && sessionStorage.getItem('isAdditionalReduction') !== null) {
            self.setIsAdditionalReduction(sessionStorage.getItem('isAdditionalReduction'));
        }
        if (sessionStorage.getItem('highRiskMarkers') != '' && sessionStorage.getItem('highRiskMarkers') !== undefined && sessionStorage.getItem('highRiskMarkers') !== null) {
            self.setHighRiskMarkers(sessionStorage.getItem('highRiskMarkers'));
        }
        if (sessionStorage.getItem('additionalReduction') != '' && sessionStorage.getItem('additionalReduction') !== undefined && sessionStorage.getItem('additionalReduction') !== null) {
            self.additionalReduction(sessionStorage.getItem('additionalReduction'));
        }
        if (sessionStorage.getItem('showAdviceBtn') != '' && sessionStorage.getItem('showAdviceBtn') !== undefined && sessionStorage.getItem('showAdviceBtn') !== null) {
            if (sessionStorage.getItem('showAdviceBtn') === "true") {
                self.showAdviceBtn(true);
            } else {
                self.showAdviceBtn(false);
            }
        }

        if (sessionStorage.getItem("v2uom") !== undefined && sessionStorage.getItem("v2uom") !== null && sessionStorage.getItem("v2uom") !== "" && sessionStorage.getItem("v3uom") !== sessionStorage.getItem("v2uom")) {
            sessionStorage.setItem("v3uom", sessionStorage.getItem("v2uom"));
            if (sessionStorage.getItem("v3uom") === "true") {
                self.UnitOfMeasure(true);
                self.UnitOfMeasureType('mmol/L');
            } else {
                self.UnitOfMeasure(false);
                self.UnitOfMeasureType('mg/dL');
            }
            self.UnitOfMeasureAction(self.UnitOfMeasure());
        } else if (sessionStorage.getItem("v3uom") === "true") {
            self.UnitOfMeasure(true);
            self.UnitOfMeasureType('mmol/L');
        } else {
            self.UnitOfMeasure(false);
            self.UnitOfMeasureType('mg/dL');
        }
        isSession = true;
    };
}


var appmodel = new viewModel();
pager.Href.hash = '#!/';
pager.extendWithPage(appmodel);

// apply your bindings
ko.applyBindings(appmodel);
// run this method - listening to hashchange
pager.start();
var path = '#!/content/calculator/';
pager.navigate(path);
$('#calculator-Tab').addClass('selected active');
if (!isNativeApplication) {
    notification.callWebApi('get', notification.criticalNotificationInputURL(), null, notification.notificationType.critical);
}


if (sessionStorage.length != 0) {
    var UnitOfMeasureSession;
    if (performance.navigation !== undefined) {
        if (performance.navigation.type == 0 || performance.navigation.type == 2) {
            appmodel.Form().appStorage();
        } else {
            UnitOfMeasureTypeSession = sessionStorage.getItem('v3uom');
            if (sessionStorage.getItem('v3uom') === 'true') {
                UnitOfMeasureSession = true;
            } else {
                UnitOfMeasureSession = false;
            }
            sessionStorage.clear();
            sessionStorage.setItem('v3uom', UnitOfMeasureTypeSession);
            if (UnitOfMeasureSession) {
                appmodel.Form().UnitOfMeasureType('mmol/L');
            } else {
                appmodel.Form().UnitOfMeasureType('mg/dL');
            }
            appmodel.Form().UnitOfMeasure(UnitOfMeasureSession);
        }
    }
}