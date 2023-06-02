/*draft email based on user inputs in application*/
var dateFormatter = function (i) {
  if (i < 10) {
    i = "0" + i;
  } else {
    return i;
  }
  return i;
};
var sendEmail = function () {
  $($(".sticky-holder").get(0)).css({ position: "static" });

  var emailText,
    subject,
    message,
    preproceduralchar,
    datetime,
    timestamp,
    breakline;
  datetime = new Date();
  breakline = "%0D%0A";
  timestamp =
    datetime.getMonth() +
    1 +
    "/" +
    datetime.getDate() +
    "/" +
    datetime.getFullYear() +
    " " +
    dateFormatter(datetime.getHours()) +
    ":" +
    dateFormatter(datetime.getMinutes());
  emailText = appmodel.FormData.emailTemplate;
  subject = emailText.subjectLine
    .replace("#gender#", appmodel.Form().Sex() == "Male" ? "M" : "F")
    .replace("#timestamp#", timestamp);
  subject = subject.replace("#age#", appmodel.Form().Age());
  message = emailText.tenyearriskHeadline;
  if (appmodel.Form().VisitType()) {
    message += emailText.followuprisk.replace(
      "#followuprisk#",
      appmodel.Form().TenYearRisk().replace("%", "%25")
    );
    message += emailText.tenyearrisk.replace(
      "#baselinerisk#",
      appmodel.Form().TenYearRiskInitial().replace("%", "%25")
    );
  } else {
    if (appmodel.Form().Age() > 59 && appmodel.Form().LDLCholesterol() >= 190) {
      message += emailText.followuprisk.replace("#followuprisk#", "N/A");
      message += emailText.lifetimerisk.replace(
        "#lifetimerisk#",
        "Lifetime Risk Calculator only provides lifetime risk estimates for individuals 20 to 59 years of age."
      );
    } else if (appmodel.Form().LDLCholesterol() >= 190) {
      message += emailText.followuprisk.replace("#followuprisk#", "N/A");
      message += emailText.lifetimerisk.replace(
        "#lifetimerisk#",
        appmodel.Form().yourLifeTimeRisk().replace("%", "%25")
      );
    } else {
      message += emailText.followuprisk.replace(
        "#followuprisk#",
        appmodel.Form().TenYearRisk().replace("%", "%25")
      );
      message += emailText.lifetimerisk.replace(
        "#lifetimerisk#",
        appmodel.Form().yourLifeTimeRisk().replace("%", "%25")
      );
    }
  }
  message += emailText.optimalrisk.replace(
    "#optimalrisk#",
    appmodel.Form().VisitType() == false
      ? appmodel.Form().RiskFormula.optimalBaselineRisk().replace("%", "%25")
      : appmodel.Form().RiskFormula.optimalFollowUpRisk().replace("%", "%25")
  );
  message += breakline;
  message += emailText.patientinformation
    .replace("#sex#", appmodel.Form().Sex())
    .replace("#race#", appmodel.Form().Race());
  if (appmodel.Form().VisitType()) {
    message += emailText.baseline.replace(
      "#age#",
      appmodel.Form().BaselineAge()
    );
    //message += breakline;
    message += emailText.labs
      .replace(
        "#totalCholesterol#",
        appmodel.Form().BaselineTotalCholesterolValue() +
          (appmodel.Form().UnitOfMeasure() ? " mmol/l" : " mg/dL")
      )
      .replace(
        "#hdlCholesterol#",
        appmodel.Form().BaselineHDLCholesterolValue() +
          (appmodel.Form().UnitOfMeasure() ? " mmol/l" : " mg/dL")
      )
      .replace(
        "#bloodPresure#",
        appmodel.Form().BaselineBloodPressure() + " mm Hg"
      )
      .replace("%0ADiastolic BP: #dbloodPressure#", "");
    message += emailText.ldl.replace(
      "#%0AldlCholesterol#",
      appmodel.Form().BaselineLDLCholesterolValue() +
        (appmodel.Form().UnitOfMeasure() ? " mmol/l" : " mg/dL")
    );
    message += emailText.personalHistory
      .replace(
        "#diabetic#",
        appmodel.Form().BaselineDiabetic()
          ? appmodel.Form().BaselineDiabetic()
          : "No"
      )
      .replace(
        "#smoker#",
        appmodel.Form().BaselineSmoker()
          ? appmodel.Form().BaselineSmoker()
          : "No"
      )
      .replace("#hypertension#", appmodel.Form().BaselineHypertension());
    message += breakline;
    message += emailText.followup.replace("#age#", appmodel.Form().Age());
    //message += breakline;
    message += emailText.labs
      .replace(
        "#totalCholesterol#",
        appmodel.Form().TotalCholesterolValue() +
          (appmodel.Form().UnitOfMeasure() ? " mmol/l" : " mg/dL")
      )
      .replace(
        "#hdlCholesterol#",
        appmodel.Form().HDLCholesterolValue() +
          (appmodel.Form().UnitOfMeasure() ? " mmol/l" : " mg/dL")
      )
      .replace("#bloodPresure#", appmodel.Form().BloodPressure() + " mm Hg")
      .replace("#dbloodPressure#", appmodel.Form().DBloodPressure() + " mm Hg");
    message += emailText.ldl.replace(
      "#ldlCholesterol#",
      appmodel.Form().LDLCholesterolValue() +
        (appmodel.Form().UnitOfMeasure() ? " mmol/l" : " mg/dL")
    );
    message += emailText.personalHistory
      .replace("#diabetic#", appmodel.Form().Diabetic())
      .replace("#smoker#", appmodel.Form().Smoker())
      .replace("#hypertension#", appmodel.Form().Hypertension());
  } else {
    message += emailText.followup.replace("#age#", appmodel.Form().Age());
    //message += breakline;
    message += emailText.labs
      .replace(
        "#totalCholesterol#",
        appmodel.Form().TotalCholesterolValue() +
          (appmodel.Form().UnitOfMeasure() ? " mmol/l" : " mg/dL")
      )
      .replace(
        "#hdlCholesterol#",
        appmodel.Form().HDLCholesterolValue() +
          (appmodel.Form().UnitOfMeasure() ? " mmol/l" : " mg/dL")
      )
      .replace("#bloodPresure#", appmodel.Form().BloodPressure() + " mm Hg")
      .replace("#dbloodPressure#", appmodel.Form().DBloodPressure() + " mm Hg");
    message += emailText.ldl.replace(
      "#ldlCholesterol#",
      appmodel.Form().LDLCholesterolValue() +
        (appmodel.Form().UnitOfMeasure() ? " mmol/l" : " mg/dL")
    );
    message += emailText.personalHistory
      .replace("#diabetic#", appmodel.Form().Diabetic())
      .replace("#smoker#", appmodel.Form().Smoker())
      .replace("#hypertension#", appmodel.Form().Hypertension());
  }
  message += breakline;
  if (appmodel.recommendationType()) {
    message += emailText.advice
      .replace("#ldladvice#", appmodel.recommendationType().ldlControl.email)
      .replace("#bpadvice#", appmodel.recommendationType().bpControl.email)
      .replace(
        "#smokingadvice#",
        appmodel.recommendationType().smokingControl.email
      )
      .replace(
        "#diabetesadvice#",
        appmodel.recommendationType().diabetesControl.email
      )
      .replace(
        "#aspirinadvice#",
        appmodel.recommendationType().aspirinControl.email
      );
  }
  message += breakline;
  message += breakline;
  message += emailText.desclaimer;
  if (isNativeApplication) {
    cordova.plugins.email.open({
      to: "",
      cc: "",
      bcc: "",
      subject: subject,
      body: decodeURI(message.replace(new RegExp("%0D%0A", "g"), "<br>")),
      isHtml: true,
    });
  } else {
    var mymail = "mailto:?subject=" + subject + "&body=" + message + "";
    window.location.href = mymail;
  }
};
