var formData = {
  sex: [
    {
      "label": "Male",
      "value": "m"
    }, {
      "label": "Female",
      "value": "f"
    }
  ],
  diabetic: [
    {
      "label": "Yes",
      "value": "true"
    }, {
      "label": "No",
      "value": "false"
    }
  ],
  smoker: [
    {
      "label": "Current",
      "value": "true",
      "cssClass": 'smoker-btn1'
    }, {
      "label": "Former",
      "value": "Quit",
      "cssClass": 'smoker-btn2'
    }, {
      "label": "Never",
      "value": "false",
      "cssClass": 'smoker-btn4'
    }
  ],
  hypertension: [
    {
      "label": "Yes",
      "value": "true"
    }, {
      "label": "No",
      "value": "false"
    }
  ],
  onStatin: [
    {
      "label": "Yes",
      "value": "true"
    }, {
      "label": "No",
      "value": "false"
    }
  ],
  onAspirin: [
    {
      "label": "Yes",
      "value": "true"
    }, {
      "label": "No",
      "value": "false"
    }
  ],
  visitType: [
    {
      "label": "Yes",
      "value": true
    }, {
      "label": "No",
      "value": false
    }
  ],
  YesNoQuestion: [
    {
      "label": "Yes",
      "value": "true"
    }, {
      "label": "No",
      "value": "false"
    }
  ],
  quiteSmoking: [{
    "label": "Unknown",
    "value": "1",
    "id": "1"
  }, {
    "label": "Less than 6 months ago",
    "value": "1",
    "id": "2"
  }, {
    "label": "6 months-1.5 years ago",
    "value": "0.85",
    "id": "3"
  }, {
    "label": "1.5-2.5 years ago",
    "value": "0.73",
    "id": "4"
  }, {
    "label": "2.5-3.5 years ago",
    "value": "0.62",
    "id": "5"
  }, {
    "label": "3.5-5 years ago",
    "value": "0.53",
    "id": "6"
  }, {
    "label": "More than 5 years ago",
    "value": "0.45",
    "id": "7"
  }],
  infotext: {
    scorebar: { "text": "Optimal risk factors include: Total cholesterol of ≤ 170 mg/dL (4.40 mmol/L), HDL-cholesterol of ≥ 50 mg/dL (1.30 mmol/L), Systolic BP of ≤ 110 mm Hg, Not taking medications for hypertension, Not a diabetic, Not a smoker", }
  },
  race: [
    {
      "label": "White",
      "value": "wh"
    }, {
      "label": "African American",
      "value": "aa"
    }, {
      "label": "Other",
      "value": "o"
    }
  ],
  notifications: {
    blank: [{
      'status': '',
      'message': ''
    }],
    smokingSelect: [{
      'id': 0,
      'status': 'warning',
      'message': 'Select a value'
    }],
    sex: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    age: [{
      'id': 0,
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'id': 1,
      'status': 'warning',
      'message': 'Please enter a value between 20-79 years'

    }, {
      'id': 2,
      'status': 'highlighted',
      'message': 'This calculator only provides 10-year risk estimates for individuals 40 to 79 years of age.'
    }, {
      'id': 3,
      'status': 'highlighted',
      'message': 'Lifetime Risk Calculator only provides lifetime risk estimates for individuals 20 to 59 years of age.'
    }],
    race: [{
      'status': 'warning',
      'message': 'Select a value'
    }, {
      'status': 'highlighted',
      'message': 'See the Estimate Warning below'
    }],
    totalCholesterol: [{
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 130 - 320 mg/dL'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 3.367 - 8.288 mmol/L'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format xxx.xxx'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format x.xxx'
    }],
    hdlCholesterol: [
      {
        'status': 'warning',
        'message': 'Enter a value'
      },
      {
        'status': 'warning',
        'message': 'Please enter a value between  20 - 100 mg/dL'
      },
      {
        'status': 'warning',
        'message': 'Please enter a value between 0.518 - 2.59 mmol/L'
      },
      {
        'status': 'error',
        'message': 'Please enter a value in the format xxx.xxx'
      }],
    bloodPresure: [{
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 90-200 mm Hg'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format xxx'
    }],
    dbloodPresure: [{
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 60-130 mm Hg'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format xxx'
    }],
    allData: [{
      'status': 'warning',
      'message': 'There is missing data. The inputs below have been highlighted.'
    }, {
      'status': 'error',
      'message': 'There are errors on the page. The inputs below have been highlighted.'
    }],
    diabetic: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    smoker: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    hypertension: [{
      'status': 'warning',
      'message': 'Select a value'
    }, {
      'status': 'warning',
      'message': 'Follow-up risk is based on the assumption that those on hypertension treatment at baseline are assumed to still need it.'
    }],
    visitType: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    statin: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    aspirin: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    ldlCholesterol: [{
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 30 - 300 mg/dL'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 0.777-7.770 mmol/L'
    }, {
      'status': 'warning',
      'message': 'Value must be less than or equal to the difference between Total Cholesterol and HDL Cholesterol'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format xxx.xxx'
    }],
    baselineAge: [{
      'id': 0,
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'id': 1,
      'status': 'warning',
      'message': 'Please enter a value between 40-79 years'

    }, {
      'id': 2,
      'status': 'warning',
      'message': 'Value must be lesser than or equal to current age'
    }, {
      'id': 3,
      'status': 'highlighted',
      'message': 'Lifetime Risk Calculator only provides lifetime risk estimates for individuals 20 to 59 years of age.'
    }],
    baselineTotalCholesterol: [{
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 130 - 320 mg/dL'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 3.367 - 8.288 mmol/L'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format xxx.xxx'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format x.xxx'
    }],
    baselineHdlCholesterol: [
      {
        'status': 'warning',
        'message': 'Enter a value'
      },
      {
        'status': 'warning',
        'message': 'Please enter a value between 20 - 100 mg/dL'
      },
      {
        'status': 'warning',
        'message': 'Please enter a value between 0.518 - 2.59 mmol/L'
      },
      {
        'status': 'error',
        'message': 'Please enter a value in the format xxx.xxx'
      }],
    baselineLdlCholesterol: [{
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 30-300 mg/dL'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 0.777-7.770 mmol/L'
    }, {
      'status': 'warning',
      'message': 'Value must be less than or equal to the difference between Total Cholesterol and HDL Cholesterol'
    },
    {
      'status': 'error',
      'message': 'Please enter a value in the format xxx.xxx'
    }],
    baselineBloodPresure: [{
      'status': 'warning',
      'message': 'Enter a value'
    }, {
      'status': 'warning',
      'message': 'Please enter a value between 90-200 mm Hg'
    }, {
      'status': 'error',
      'message': 'Please enter a value in the format xxx'
    }],
    baselineHypertension: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    baselineDiabetic: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
    baselineSmoker: [{
      'status': 'warning',
      'message': 'Select a value'
    }],
  },

  formToolTips: {
    smokerToolTip: {
      id: '0', htmlID: 'smokingInfo', text: 'Is smoker?', value: '1', showInfo: true, tooltipTitle: 'Defined as cigarette smoker based on patient population studied in relevant clinical trials. Use clinical discretion in regards to patients who use e-cigarettes and other tobacco products.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    },
    ldlToolTip: {
      id: '1', htmlID: 'ldlInfo', text: 'ldl < 190', value: '1', showInfo: true, tooltipTitle: 'App may not fully represent risk for patients with LDL-C > 190 mg/dL. These patients may have familial hypercholesterolemia and should be evaluated and considered for lipid-lowering medication regardless of 10-year ASCVD risk.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    },
    statinToolTip: {
      id: '2', htmlID: 'statinInfo', text: 'statin yes no', value: '1', showInfo: true, tooltipTitle: 'Baseline 10-year ASCVD risk may be calculated for patients who have already initiated statin therapy. It is not necessary to stop and wash the body clean of statin therapy in order to re-measure baseline values. Evidence suggests a patient’s cholesterol levels have the same impact on ASCVD risk regardless of whether they were achieved with aid of statin therapy.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    },
    aspirinToolTip: {
      id: '3', htmlID: 'aspirinInfo', text: 'aspirin yes no', value: '1', showInfo: true, tooltipTitle: 'Guidelines do not typically recommend aspirin therapy for patients with 10-year risk <10%. Use USPSTF recommendations and consider potential risk for major bleeding when considering use of aspirin.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    },
    ageToolTip: {
      id: '0', htmlID: 'ageInfo', text: 'What is current age?', value: '1', showInfo: true, tooltipTitle: 'For patients ≥ 80 y/o, a default of 79 y/o may be reasonably used as the 10-year ASCVD risk for this population is generally >10%.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    },
    previousvisitToolTip: {
      id: '0', htmlID: 'previousvisitInfo', text: 'Do you want to compare?', value: '1', showInfo: true, tooltipTitle: ' Providing data from a previous visit will allow the app to more precisely calculate a 40-79 year old patient’s current risk by accounting for changes in their risk factor levels over time.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    }
  },

  scorebarToolTips: {
    currentAgeValToolTip: {
      id: '0', htmlID: 'currentAgeInfo', text: '', value: '1', showInfo: true, tooltipTitle: 'This calculator only provides 10-year risk estimates for individuals 40 to 79 years of age.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    },
    baselineAgeValToolTip: {
      id: '1', htmlID: 'baselineAgeInfo', text: '', value: '1', showInfo: true, tooltipTitle: 'This calculator cannot calculate risk in this scenario since it only provides 10-year risk estimates for individuals 40 to 79 years of age.', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true)
    }
  },

  treatmentOne: [
    { id: '0', htmlID: 't1QuitSmoke', text: 'Quit Smoking', value: '1', showInfo: true, tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.', therapyText: 'Smoking Cessation', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true), chartText: 'no&nbsp;smoking', gaLabel: 'Quit Smoking' },
    { id: '1', htmlID: 't1Statin', text: 'Start/Intensify Statin', value: '1', showInfo: true, tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ', therapyText: 'Statin Therapy', responsiveClass: 'small-12 medium-6 large-3', enable: ko.observable(true), chartText: 'statin', gaLabel: 'Add_Intensify Statin' },
    { id: '2', htmlID: 't1BP', text: 'Start/Add Blood Pressure Medication(s)', value: '1', showInfo: true, tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.', therapyText: 'BP Medication', responsiveClass: 'small-12 medium-6 large-4', enable: ko.observable(true), chartText: 'BP meds', gaLabel: 'Add_Intensify BP Med' },
    { id: '3', htmlID: 't1Aspirin', text: 'Start/continue aspirin therapy', value: '1', showInfo: true, tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383', therapyText: 'Aspirin Therapy', responsiveClass: 'small-12 medium-6 large-3', enable: ko.observable(true), chartText: 'aspirin', gaLabel: 'Start_Cont Aspirin' }
  ],
  treatmentTwo: [
    { id: '0', htmlID: 't2QuitSmoke', text: 'Quit Smoking', value: '1', showInfo: true, tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.', therapyText: 'Smoking Cessation', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true), chartText: 'no&nbsp;smoking' },
    { id: '1', htmlID: 't2Statin', text: 'Start/Intensify Statin', value: '1', showInfo: true, tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ', therapyText: 'Statin Therapy', responsiveClass: 'small-12 medium-6 large-3', enable: ko.observable(true), chartText: 'statin' },
    { id: '2', htmlID: 't2BP', text: 'Start/Add Blood Pressure Medication(s)', value: '1', showInfo: true, tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.', therapyText: 'BP Medication', responsiveClass: 'small-12 medium-6 large-4', enable: ko.observable(true), chartText: 'BP meds' },
    { id: '3', htmlID: 't2Aspirin', text: 'Start/continue aspirin therapy', value: '1', showInfo: true, tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383', therapyText: 'Aspirin Therapy', responsiveClass: 'small-12 medium-6 large-3', enable: ko.observable(true), chartText: 'aspirin' }
  ],
  treatmentThree: [
    { id: '0', htmlID: 't3QuitSmoke', text: 'Quit Smoking', value: '1', showInfo: true, tooltipTitle: 'Adverse effects of tobacco cessation therapies are generally poorly reported, and vary by drug.', therapyText: 'Smoking Cessation', responsiveClass: 'small-12 medium-6 large-2', enable: ko.observable(true), chartText: 'no&nbsp;smoking' },
    { id: '1', htmlID: 't3Statin', text: 'Start/Intensify Statin', value: '1', showInfo: true, tooltipTitle: 'There is moderate quality evidence that statins do not increase the overall risk of adverse events, but that they may increase the risk of diagnosis of type 2 diabetes in certain individuals. ', therapyText: 'Statin Therapy', responsiveClass: 'small-12 medium-6 large-3', enable: ko.observable(true), chartText: 'statin' },
    { id: '2', htmlID: 't3BP', text: 'Start/Add Blood Pressure Medication(s)', value: '1', showInfo: true, tooltipTitle: 'Adverse effects of blood-pressure-lowering therapies are generally poorly reported, and vary by drug class.', therapyText: 'BP Medication', responsiveClass: 'small-12 medium-6 large-4', enable: ko.observable(true), chartText: 'BP meds' },
    { id: '3', htmlID: 't3Aspirin', text: 'Start/continue aspirin therapy', value: '1', showInfo: true, tooltipTitle: 'There is high-quality evidence indicating that aspirin may increase the risk of major bleeding. A calculator for considering major bleeding risks and potential benefits of aspirin therapy for MI and stroke prevention is available at: http://annals.org/article.aspx?articleid=744383', therapyText: 'Aspirin Therapy', responsiveClass: 'small-12 medium-6 large-3', enable: ko.observable(true), chartText: 'aspirin' }
  ],
  bpAdviceText: {
    DUMMY: {
      conditional: "some condition here",
      adviceTherapyImpact: "some advice here",
      adviceBPSection: "some advice here",
      email: "some email text here"
    },
    CASE01: {
      conditional: "cvRisk < 10 && bp >= 180 && dbp >= 60 && dbp <= 130",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I,B)</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 1,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE02: {
      conditional: "cvRisk < 10 && bp < 120 && dbp < 80",
      adviceTherapyImpact: "For normal blood pressure, repeat evaluation every year is reasonable. ",
      adviceBPSection: "<div class='callout'>Patient has normal blood pressure. </div><ul><li>Repeat evaluation every year is reasonable.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a normal BP, repeat evaluation every year is reasonable (IIa, C)</li></ul>",
      email: "Normal BP: Repeat evaluation every year.",
      id: 2,
      bpgaLabel: "BP_Normal BP"
    },
    CASE03: {
      conditional: "cvRisk < 10 && bp < 120 && dbp >= 80 && dbp <= 89",
      adviceTherapyImpact: "For stage 1 HTN, manage with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months.",
      adviceBPSection: "<div class='callout'>Patient has stage 1 hypertension.</div><ul><li>Manage with nonpharmacological therapy. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Conduct repeat BP evaluation within 3 to 6 months.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with an elevated BP or stage 1 hypertension who have an estimated 10-year ASCVD risk less than 10%  should be managed with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months (I,B)</li></ul>",
      email: "Stage 1 HTN: Manage with lifestyle. Repeat evaluation in 3-6 months.",
      id: 3,
      bpgaLabel: "BP_Stage 1 Hypertension"
    },
    CASE04: {
      conditional: "cvRisk < 10 && bp < 120 && dbp >= 90 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 4,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE05: {
      conditional: "cvRisk < 10 && bp < 120 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Evaluation followed by prompt antihypertensive drug treatment is recommended. </li><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 5,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE06: {
      conditional: "cvRisk < 10 && bp >= 120 && bp <= 129 && dbp < 80",
      adviceTherapyImpact: "For Elevated BP, manage with nonpharmacological therapy.",
      adviceBPSection: "<div class='callout'>Patient has elevated blood pressure. </div><ul><li>	Manage with nonpharmalogical therapy. </li><li>Conduct a repeat BP evaluation within 3 to 6 months.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with an elevated BP or stage 1 hypertension who have an estimated 10-year ASCVD risk less than 10% should be managed with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months (I,B).</li></ul>",
      email: "Elevated BP: Manage with lifestyle. Repeat evaluation in 3-6 months.",
      id: 6,
      bpgaLabel: "BP_Elevated BP"
    },
    CASE07: {
      conditional: "cvRisk < 10 && bp >= 120 && bp <= 129 && dbp >= 80 && dbp <= 89",
      adviceTherapyImpact: "For stage 1 HTN, manage with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months.",
      adviceBPSection: "<div class='callout'>Patient has stage 1 hypertension. </div><ul><li>Manage with nonpharmacological therapy. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Conduct repeat BP evaluation within 3 to 6 months.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with an elevated BP or stage 1 hypertension who have an estimated 10-year ASCVD risk less than 10% should be managed with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months (I,B).</li></ul>",
      email: "Stage 1 HTN: Manage with lifestyle. Repeat evaluation in 3-6 months.",
      id: 7,
      bpgaLabel: "BP_Stage 1 Hypertension"
    },
    CASE08: {
      conditional: "cvRisk < 10 && bp >= 120 && bp <= 129 && dbp >= 90 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension. </div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 8,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE09: {
      conditional: "cvRisk < 10 && bp >= 120 && bp <= 129 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Evaluation followed by prompt antihypertensive drug treatment is recommended. </li><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 9,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE10: {
      conditional: "cvRisk < 10 && bp >= 130 && bp <= 139 && dbp <= 89",
      adviceTherapyImpact: "For stage 1 HTN, manage with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months.",
      adviceBPSection: "<div class='callout'>Patient has stage 1 hypertension.</div><ul><li>Manage with nonpharmacological therapy. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Conduct repeat BP evaluation within 3 to 6 months.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with an elevated BP or stage 1 hypertension who have an estimated 10-year ASCVD risk less than 10% should be managed with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months (I,B).</li></ul>",
      email: "Stage 1 HTN: Manage with lifestyle. Repeat evaluation in 3-6 months.",
      id: 10,
      bpgaLabel: "BP_Stage 1 Hypertension"
    },
    CASE11: {
      conditional: "cvRisk < 10 && bp >= 130 && bp <= 139 && dbp >= 90 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 11,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE12: {
      conditional: "cvRisk < 10 && bp >= 130 && bp <= 139 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Evaluation followed by prompt antihypertensive drug treatment is recommended.</li><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 12,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE13: {
      conditional: "cvRisk < 10 && bp >= 140 && bp <= 179 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I,C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 13,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE14: {
      conditional: "cvRisk < 10 && bp >= 140 && bp <= 179 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Evaluation followed by prompt antihypertensive drug treatment is recommended. </li><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medication is recommended for primary prevention of CVD in adults with no history of CVD and with an estimated 10-year ASCVD risk <10% and an SBP of 140 mm Hg or higher or a DBP of 90 mm Hg or higher (I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month.",
      id: 14,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE15: {
      conditional: "cvRisk >= 10 && bp >= 180 && dbp >= 60 && dbp <= 130",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD  and an average SBP of 130 mm Hg or higher or an average DBP of 80 mm Hg or higher, and for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher  (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 15,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE16: {
      conditional: "cvRisk >= 10 && bp < 120 && dbp < 80",
      adviceTherapyImpact: "For normal blood pressure, repeat evaluation every year is reasonable. ",
      adviceBPSection: "<div class='callout'>Patient has normal blood pressure. </div><ul><li>Repeat evaluation every year is reasonable.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a normal BP, repeat evaluation every year is reasonable (IIa, C)</li></ul>",
      email: "Normal BP: Repeat evaluation every year.",
      id: 16,
      bpgaLabel: "BP_Normal BP"
    },
    CASE17: {
      conditional: "cvRisk >= 10 && bp < 120 && dbp >= 80 && dbp <= 89",
      adviceTherapyImpact: "For Stage 1 HTN, manage initially with a combination of nonpharmacological and antihypertensive drug therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 1 hypertension.</div><ul><li>Manage initially with a combination of nonpharmacological and antihypertensive drug therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Conduct repeat BP evaluation in 1 month.</li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with stage 1 hypertension who have an estimated 10-year ASCVD risk of 10% or higher should be managed initially with a combination of nonpharmacological and antihypertensive drug therapy and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD and an average SBP of 130 mm Hg or higher and an average DBP of 80 mm Hg or higher, or for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher (SBP:I, A; DBP:I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 1 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 17,
      bpgaLabel: "BP_Stage 1 Hypertension"
    },
    CASE18: {
      conditional: "cvRisk >= 10 && bp < 120 && dbp >= 90 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events  in patients with clinical CVD  and an average SBP of 130 mm Hg or higher and an average DBP of 80 mm Hg or higher, or for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 18,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE19: {
      conditional: "cvRisk >= 10 && bp < 120 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD  and an average SBP of 130 mm Hg or higher or an average DBP of 80 mm Hg or higher, and for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher  (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 19,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE20: {
      conditional: "cvRisk >= 10 && bp >= 120 && bp <= 129 && dbp < 80",
      adviceTherapyImpact: "For Elevated BP, manage with nonpharmacological therapy.",
      adviceBPSection: "<div class='callout'>Patient has elevated blood pressure. </div><ul><li>Manage with nonpharmalogical therapy. </li><li>Conduct a repeat BP evaluation within 3 to 6 months.  </li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Prevention of hypertension and treatment of established hypertension are complementary approaches to reducing CVD risk in the population, but prevention of hypertension provides the optimal means of reducing risk and avoiding the harmful consequences of hypertension. Nonpharmacological therapy alone is especially useful for prevention of hypertension, including in adults with elevated BP, and for management of high BP in adults with milder forms of hypertension (Guideline discussion text)</li><li>Adults with an elevated BP or stage 1 hypertension who have an estimated 10-year ASCVD risk less than 10% should be managed with nonpharmacological therapy and have a repeat BP evaluation within 3 to 6 months (I, B).</li></ul>",
      email: "Elevated BP: Manage with lifestyle. Repeat evaluation in 3-6 months.",
      id: 20,
      bpgaLabel: "BP_Elevated BP"
    },
    CASE21: {
      conditional: "cvRisk >= 10 && bp >= 120 && bp <= 129 && dbp >= 80 && dbp <= 89",
      adviceTherapyImpact: "For Stage 1 HTN, manage initially with a combination of nonpharmacological and antihypertensive drug therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 1 hypertension.</div><ul><li>Manage initially with a combination of nonpharmacological and antihypertensive drug therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Conduct repeat BP evaluation in 1 month.</li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with stage 1 hypertension who have an estimated 10-year ASCVD risk of 10% or higher should be managed initially with a combination of nonpharmacological and antihypertensive drug therapy and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A). </li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 1 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 21,
      bpgaLabel: "BP_Stage 1 Hypertension"
    },
    CASE22: {
      conditional: "cvRisk >= 10 && bp >= 120 && bp <= 129 && dbp >= 90 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events  in patients with clinical CVD  and an average SBP of 130 mm Hg or higher and an average DBP of 80 mm Hg or higher, or for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 22,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE23: {
      conditional: "cvRisk >= 10 && bp >= 120 && bp <= 129 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD  and an average SBP of 130 mm Hg or higher or an average DBP of 80 mm Hg or higher, and for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher  (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 23,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE24: {
      conditional: "cvRisk >= 10 && bp >= 130 && bp <= 139 && dbp <= 89",
      adviceTherapyImpact: "For Stage 1 HTN, manage initially with a combination of nonpharmacological and antihypertensive drug therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 1 hypertension.</div><ul><li>Manage initially with a combination of nonpharmacological and antihypertensive drug therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Conduct repeat BP evaluation in 1 month.</li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Adults with stage 1 hypertension who have an estimated 10-year ASCVD risk of 10% or higher should be managed initially with a combination of nonpharmacological and antihypertensive drug therapy and have a repeat BP evaluation in 1 month (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD and an average SBP of 130 mm Hg or higher and an average DBP of 80 mm Hg or higher, or for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher (SBP:I, A; DBP:I, C).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 1 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 24,
      bpgaLabel: "BP_Stage 1 Hypertension"
    },
    CASE25: {
      conditional: "cvRisk >= 10 && bp >= 130 && bp <= 139 && dbp >= 90 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events  in patients with clinical CVD  and an average SBP of 130 mm Hg or higher and an average DBP of 80 mm Hg or higher, or for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 25,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE26: {
      conditional: "cvRisk >= 10 && bp >= 130 && bp <= 139 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD  and an average SBP of 130 mm Hg or higher or an average DBP of 80 mm Hg or higher, and for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher  (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 26,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    },
    CASE27: {
      conditional: "cvRisk >= 10 && bp >= 140 && bp <= 179 && dbp <= 109",
      adviceTherapyImpact: "For Stage 2 HTN, initiation of antihypertensive drug therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy is recommended. ",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension.</div><ul><li>Initiation of BP-lowering medication therapy (with 2 agents of different classes) is recommended in combination with nonpharmalogical therapy.</li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events  in patients with clinical CVD  and an average SBP of 130 mm Hg or higher and an average DBP of 80 mm Hg or higher, or for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 27,
      bpgaLabel: "BP_Stage 2 Hypertension"
    },
    CASE28: {
      conditional: "cvRisk >= 10 && bp >= 140 && bp <= 179 && dbp >= 110",
      adviceTherapyImpact: "For Stage 2 HTN with very high average blood pressure, initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy.",
      adviceBPSection: "<div class='callout'>Patient has stage 2 hypertension with very high average blood pressure.</div><ul><li>Initiate BP-lowering medication therapy (with 2 agents of different classes) in combination with nonpharmalogical therapy. </li><li>First line antihypertensive agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs. For nonpharmalogical therapy recommendations, see the Lifestyle section of this table.</li><li>Patient should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, and have a repeat BP evaluation in 1 month after therapy initiation. </li><li>A BP target of less than 130/80 mm Hg is recommended.</li></ul><h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>For adults with a very high average BP (e.g., SBP ≥180 mm Hg or DBP ≥110 mm Hg), evaluation followed by prompt antihypertensive drug treatment is recommended (I, B).</li><li>Use of BP-lowering medications is recommended for secondary prevention of recurrent CVD events in patients with clinical CVD  and an average SBP of 130 mm Hg or higher or an average DBP of 80 mm Hg or higher, and for primary prevention in adults with an estimated 10-year atherosclerotic cardiovascular disease (ASCVD) risk of 10% or higher and an average SBP 130 mm Hg or higher or an average DBP 80 mm Hg or higher  (SBP:I, A; DBP:I, C).</li><li>Adults with stage 2 hypertension should be evaluated by or referred to a primary care provider within 1 month of the initial diagnosis, have a combination of nonpharmacological and antihypertensive drug therapy (with 2 agents of different classes) initiated, and have a repeat BP evaluation in 1 month (I, B).</li><li>For initiation of antihypertensive drug therapy, first-line agents include thiazide diuretics, CCBs, and ACE inhibitors or ARBs (I, A).</li><li>Simultaneous use of an ACE inhibitor, ARB, and/or renin inhibitor is potentially harmful and is not recommended to treat adults with hypertension (III, A).</li><li>For adults with confirmed hypertension and known CVD or 10-year ASCVD event risk of 10% or higher, a BP target of less than 130/80 mm Hg is recommended  (SBP:I, B; DBP:I, C).</li></ul>",
      email: "Stage 2 HTN: Initiate BP-lowering meds with lifestyle. Repeat evaluation in 1 month. BP target 130/80.",
      id: 28,
      bpgaLabel: "BP_Stage 2 Hypertension High Avg BP"
    }

  },

  ldlAdviceText: {
    DUMMY: {
      conditional: "some condition here",
      adviceLDLSection: "some advice here",
      adviceTherapyImpact: "some advice here"
    },
    CASE1: {
      conditional: "age >= 20 && age <= 39",
      adviceLDLSection: "<div class='callout'>Emphasize lifestyle (I, B). Certain risk factors may indicate intensified therapy.  </div><ul><li>Patients with LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (II,B)</li><li>Patients with LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy. (IIb, B)</li><li>Patients with diabetes that includes complicating factors, it may be reasonable to initiate statin therapy. (IIb, C)</li></ul>",
      adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>All young adults (20-39 years of age) should have a fasting or non-fasting lipid profile and other laboratory measures as needed to detect risk-enhancing factors and estimate lifetime risk for ASCVD. (I,A)</li><li>Young adults should be counseled to follow a healthy life-style, including diet, regular physical activity, and maintenance of ideal body weight, to limit ASCVD risk. (I,B)</li><li>Young adults who have LDL-C 130 to 159 mg/dL are at increased lifetime risk for ASCVD and may benefit from intensified lifestyle intervention. (IIB,B)</li><li>In adults 20 to 39 years of age with diabetes complicated by long duration (≥10 years of Type 2 diabetes, ≥20 years of Type I), albuminuria (>30 mcg albumin/mg creatinine), eGFR < 60 ml/min/m2, retinopathy, neuropathy, ankle brachial index (<0.9), coronary artery calcium score > 0, it may be reasonable to initiate statin therapy. (IIB, C)</li><li>Young adults should be tested for secondary causes of elevated LDL-C due to hypothyroidism, obstructive liver disease, nephrotic syndrome, medication, or dietary causes. (I,B)</li><li>Young adults who have LDL-C 160 to 189 mg/dL are at increased lifetime risk for ASCVD and may be considered for statin therapy.  (IIB,B)</li></ul>",
      adviceTherapyImpact: "Emphasize lifestyle. Certain risk factors may indicate intensified therapy. ",
      email: "In patients without phenotypically severe hypercholesterolemia, begin risk assessment by estimating lifetime risk.%0D%0AIn patients with persistent, moderate hypercholesterolemia, lifestyle intervention is indicated, %0D%0Aand long-term statin therapy would be beneficial.%0D%0AIn patients with severe hypercholesterolemia, lifestyle intervention and maximally tolerated %0D%0Astatin therapy indicated.  %0D%0AIf LDL-C reduction of >50%25 not achieved, non-statin therapies may also be indicated.%0D%0AIn patients with diabetes of long duration and/or albuminuria, eGFR <60 ml/min/m2, %0D%0Aretinopathy or neuropathy, lifestyle intervention indicated, and statin therapy may be reasonable.",
      ldlgaLabel: "",
      id: 1
    },
    CASE2: {
      conditional: "ldl >= 190",
      adviceLDLSection: "<div class='ldl callout'>Maximally tolerated statin therapy is recommended in patients age 20-75. If response if deemed insufficient, addition of non-statin therapies may be considered. </div>",
      adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher, maximally tolerated statin therapy is recommended. (I,B-R)</li><li>In patients 20 to 75 years of age with an LDL-C level of 190 mg/dL (≥4.9 mmol/L) or higher who achieve less than a 50% reduction in LDL-C while receiving maximally tolerated statin therapy and/or have an LDL-C level of 100 mg/dL (≥2.6 mmol/L) or higher, ezetimibe therapy is reasonable (IIa,B-R)</li><li>In patients 20 to 75 years of age with a baseline LDL-C level > 190 mg/dL (≥4.9 mmol/L), who achieve less than a 50% reduction in LDL-C levels and have fasting triglycerides ≤300 mg/dL (<3.4 mmol/L) while taking maximally tolerated statin and ezetimibe therapy, the addition of a bile acid sequestrant may be considered (IIb,B-R)</li><li>In patients 40 to 75 years of age with a baseline LDL-C level of 220 mg/dL (≥5.7 mmol/L) or higher and who achieve an on-treatment LDL-C level of 130 mg/dL (≥3.4 mmol/L) or higher while receiving maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb,C-LD)</li><li>In patients 30 to 75 years of age with heterozygous FH and with an LDL-C level of 100 mg/dL (>2.6 mmol/L) or higher while taking maximally tolerated statin and ezetimibe therapy, the addition of a PCSK9 inhibitor may be considered (IIb, B-R). </li><li>Among patients with FH without evidence of clinical ASCVD taking maximally tolerated statin and ezetimibe therapy, PCSK9 inhibitors provide uncertain value at mid-2018 U.S. list prices. (Value Statement: Uncertain Value (B-NR))</li></ul>",
      adviceTherapyImpact: "Maximally tolerated statin recommended after clinician-patient discussion.",
      email: "Maximally tolerated statin recommended after clinician-patient discussion.",
      ldlgaLabel: "",
      id: 2
    },
    CASE3: {
      conditional: "ldl <= 69",
      adviceLDLSection: "<div class='ldl callout'>Emphasize a heart healthy lifestyle to minimize ASCVD risk. </div>",
      adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>When measuring LDL-C for patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
      adviceTherapyImpact: "Emphasize a heart healthy lifestyle to minimize ASCVD risk.",
      email: "Emphasize a heart healthy lifestyle.",
      ldlgaLabel: "",
      id: 3
    },
    CASE4: {
      conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == true",
      adviceLDLSection: "<div class='callout'>In patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to initiate statin therapy (IIb, C) and consider moderate intensity statin (IIb,B-R); or,  continue statin therapy if already initiated (IIa, B-NR); or, stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R). </div><p><u>Before deciding on initiation of statin therapy:</u></p> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation.</br> <a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
      adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion </h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults with diabetes mellitus older than 75 years of age , it may be reasonable to initiate statin therapy after a clinician-patient discussion of potential benefits and risks. (IIb, C-LD)</li><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults with diabetes mellitus  older than 75 years of age who are already on statin therapy, it is reasonable to continue statin therapy. (IIa, B-NR)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limits the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with a CAC score of zero to avoid statin therapy. (IIb, B-R)</li></ul>",
      adviceTherapyImpact: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
      email: "May be reasonable to initiate statin therapy after clinician-patient discussion or continue statin therapy if already initiated. ",
      ldlgaLabel: "",
      id: 4
    },
    CASE5: {
      conditional: "ldl >= 70 && ldl <= 189 && age > 75 && diabetic == false",
      adviceLDLSection: "<div class='callout'>Conduct a clinical assessment and risk assessment. Moderate intensity statin may be reasonable (IIb, B-R).  It may be reasonable to stop statin therapy when functional decline, multimorbidity, frailty or reduced life expectancy limit the potential benefits (IIb, B-R).  </div>",
      adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 75 years of age or older with an LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), initiating a moderate- intensity statin may be reasonable. (IIb, B-R)</li><li>In adults 75 years of age or older, it may be reasonable to stop statin therapy when functional decline (physical or cognitive), multimorbidity, frailty or reduced life expectancy limit the potential benefits of statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In adults 76-80 years of age with LDL-C of 70 to 189 mg/dL (1.7 to 4.8 mmol/L), it may be reasonable to measure coronary artery calcium (CAC) to reclassify those with CAC = 0 to avoid statin therapy. (IIb, B-R)</li></ul>",
      adviceTherapyImpact: "Conduct a clinical assessment and risk assessment.",
      email: "Conduct a clinical assessment and risk assessment.",
      ldlgaLabel: "",
      id: 5
    },
    CASE6: {
      conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk < 5",
      adviceLDLSection: "<div class='callout'>Emphasize lifestyle to reduce risk factors. </div>",
      adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li></ul>",
      adviceTherapyImpact: "Emphasize lifestyle to reduce risk factors.",
      email: "Emphasize lifestyle to reduce risk factors.",
      ldlgaLabel: "",
      id: 6
    },
    CASE7: {
      conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 5 && cvRisk <= 7.4",
      adviceLDLSection: "<div class='callout'>May consider moderate intensity statin for patients with LDL 70-189  mg/dL (1.7 to 4.8 mmol/L) and presence of risk-enhancing factors. - (IIb, B-R)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment. </br> <a class='link' data-open='discussion-checklist'>Discussion checklist</a> </li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR). </br><a class='link' data-open='cac-score'>More information for using  a CAC score in decision-making </a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
      adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy</h5><ul><li>In patients at borderline risk, in risk discussion, the presence of risk-enhancing factors may justify initiation of moderate-intensity statin therapy. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults, if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND <ul><li>If the coronary artery calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CAC score is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CAC score is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy.(IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
      adviceTherapyImpact: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
      email: "May consider moderate intensity statin in presence of risk-enhancing factors. ",
      ldlgaLabel: "",
      id: 7
    },
    CASE8: {
      conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 7.5 && cvRisk <= 19.9",
      adviceLDLSection: "<div class='callout'>Moderate intensity statin is recommended for patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L).Presence of risk enhancing factors favor initiation or intensification of statin therapy (IIa, B-R). LDL-C should be reduced by at least 30%, (I,A). </div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a><br/><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>In select patients, if decision to use statin remains uncertain after risk assessment and discussion, it is reasonable to use a CAC score as part of the decision-making process (IIa, B-NR).<br/><a class='link' data-open='cac-score'>More information on using a CAC score in decision making</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br> <a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a> </li></ul>",
      adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults at intermediate-risk, statin therapy reduces risk of ASCVD and in the context of a risk discussion, if a decision is made for statin therapy, a moderate-intensity statin should be recommended. (I,A)</li><li>In intermediate-risk adults, risk-enhancing factors favor initiation or intensification of statin therapy. (IIa, B-R)</li><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>In intermediate-risk adults who would benefit from more aggressive LDL-C lowering and in whom high-intensity statins are advisable, but not acceptable or tolerated, it may be reasonable to add a nonstatin drug (ezetimibe or bile acid sequestrant) to a moderate-intensity statin. (IIb, B-R)</li></ul><h5>Coronary Artery Calcium Score</h5><ul><li>In intermediate-risk or selected borderline-risk adults if the decision about statin use remains uncertain, it is reasonable to use a coronary artery calcium (CAC) score in the decision to withhold, postpone or initiate statin therapy. (IIa, B-NR)</li><li>In intermediate-risk adults or selected borderline-risk adults in whom a CAC score  is measured for the purpose of making a treatment decision, AND<ul><li>If the coronary calcium score is zero, it is reasonable to withhold statin therapy and reassess in 5-10 years, as long as higher risk conditions are absent (diabetes mellitus, family history of premature CHD, cigarette smoking);</li><li>If CACscore is 1 to 99, it is reasonable to initiate statin therapy for patients ≥ 55 years of age;</li><li>If CACscore is 100 or higher or in the 75th percentile or higher, it is reasonable to initiate statin therapy. (IIa, B-NR)</li></ul></li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate intensity statin combined with ezetimibe can be useful  (IIa, B-R) </li><li>In adults 40-75 years of age and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)  at 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R)</li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy ( IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500mg/dL)[≥5.6 mmol/L] and ASCVD risk of 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy. (IIa, B-R)</li> <li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL)[≥ 5.7 mmol/L] and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
      adviceTherapyImpact: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
      email: "Moderate intensity statin is recommended if decided upon as part of a clinician-patient discussion. ",
      ldlgaLabel: "",
      id: 8
    },
    CASE9: {
      conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == false && cvRisk >= 20",
      adviceLDLSection: "<div class='callout'>Maximally-tolerated statin initiation is recommended for high risk patients with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) to reduce LDL-C ≥ 50%. (I,A)</div><p><u>Before deciding on initiation of statin therapy:</u></p><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
      adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In intermediate risk patients, LDL-C levels should be reduced by 30% or more, and for optimal ASCVD risk reduction, especially in high-risk patients, levels should be reduced by 50% or more. (I, A)</li><li>If in the context of a risk discussion, maximal ASCVD risk reduction is desired, it is reasonable to use a high intensity statin to lower LDL-C by ≥50%. This provides increased benefit, especially when 10-year ASCVD risk is ≥20%. (Discussion text)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries) ; when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years and LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who are at 10-year ASCVD risk of 7.5 or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statin combined with ezetimibe can be useful. (IIa, B-R) </li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk-enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR) </li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk of 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and to consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy. (IIa B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥5.6 mmol/L]) and if ASCVD risk is of 7.5% or higher, it is reasonable to address reversible causes of high triglycerides and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L])  and especially fasting triglycerides ≥ 1000 mg/dL(11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low-fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and, if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul><h5>LDL-C < 70 mg/dL (<1.8 mmol/L)</h5><ul><li>For patients with an LDL-C level less than 70 mg/dL (<1.8 mmol/L), measurement of direct LDL-C or modified LDL-C estimate is reasonable to improve accuracy over the Friedewald formula (IIa, C-LD)</li></ul>",
      adviceTherapyImpact: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%. ",
      email: "Maximally-tolerated statin initiation is recommended to reduce LDL-C ≥ 50%25. ",
      ldlgaLabel: "",
      id: 9
    },
    CASE10: {
      conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk < 20",
      adviceLDLSection: "<div class='callout'>Moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy to reduce risk by ≥50% is reasonable (IIa, B-R). </div> <ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinicians should evaluate risk enhancing factors. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a> </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
      adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, yet emphasizing that side effects can be addressed successfully. (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy with the aim to reduce LDL-C by 50% or more. (IIa, B-R)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years) and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries), when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li></ul>",
      adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
      email: "Statin initiation is indicated in the context of a clinician-patient risk discussion. ",
      ldlgaLabel: "",
      id: 10
    },
    CASE11: {
      conditional: "ldl >= 70 && ldl <= 189 && age >= 40 && age <= 75 && diabetic == true && cvRisk >= 20",
      adviceLDLSection: "<div class='callout'>At least moderate intensity statin initiation is indicated (I, A). High-intensity statin therapy is reasonable to reduce LDL-C by ≥50%. (IIa, B-R).  Addition of ezetimibe to statin therapy is also reasonable to reduce LDL-C by ≥50%.</div><ul><li>Clinicians and patients should engage in a risk discussion that considers patient preferences for individualized treatment.  </br><a class='link' data-open='discussion-checklist'>Discussion checklist</a></li><li>Clinician should evaluate for presence of risk enhancing factors that may favor statin initiation. </br><a class='link' data-open='risk-enhancing-factors'>Overall list of risk enhancing factors</a></br><a class='link' data-open='diabetes-specific-risk'>Additional risk factors for diabetes patients</a>  </br><a class='link' data-open='race-ethnicity-issues'>Race/ethnic specific factors in assessing and treating ASCVD risk</a></li><li>If statin therapy is decided upon, clinician and patient should discuss risk and benefits before initiation. </br><a class='link' data-open='statin-intensity-modal'>Statin types and intensities </a></li></ul>",
      adviceLDLSGR: "<h4 class='italic'>Supporting Guideline Recommendations</h4><h5>Clinician-Patient Risk Discussion</h5><ul><li>Clinicians and patients should engage in a risk discussion that considers risk factors, adherence to healthy lifestyle, the potential for ASCVD risk-reduction benefits and the potential for adverse effects and drug–drug interactions, as well as patient preferences for an individualized treatment decision. (I,B-NR)</li><li>A clinician-patient risk discussion is recommended before initiating statin therapy to review net clinical benefit, weighing the potential for ASCVD risk reduction against the potential for statin-associated side effects, statin-drug interactions and safety, while emphasizing that side effects can be addressed successfully.  (I,A)</li></ul><h5>Drug Therapy for Risk Reduction</h5><ul><li>In adults 40 to 75 years of age with diabetes mellitus, regardless of estimated 10-year ASCVD risk, moderate-intensity statin therapy is indicated. (I,A)</li><li>In patients with diabetes mellitus who have multiple ASCVD risk factors, it is reasonable to prescribe high-intensity statin therapy to reduce LDL-C by 50% or more. (IIa, B-R)</li><li>In adults with diabetes mellitus and 10-year ASCVD risk 20% or higher, it may be reasonable to add ezetimibe to maximally tolerated statin therapy to reduce LDL-C by 50% or more. (IIb, C-LD)</li></ul><h5>Risk Enhancing Factors</h5><ul><li>Clinicians should consider conditions specific to women such as premature menopause (age < 40 years)  and history of pregnancy-associated disorders (hypertension, preeclampsia, gestational diabetes mellitus, small-for-gestational-age infants, preterm deliveries); when discussing lifestyle intervention and the potential for benefit of statin therapy. (I,B-NR)</li><li>For clinical decision-making in adults of different race/ethnicities, it is reasonable for clinicians to review race/ethnic features that can influence ASCVD risk (1) so as to adjust choice of statin or intensity of treatment. (IIa, B-NR)</li><li>In adults 40-75 years who have LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L) who have a 10-year ASCVD risk 7.5% or higher, chronic kidney disease not treated with dialysis or kidney transplantation is a risk-enhancing factor and initiation of a moderate-intensity statin or moderate-intensity statins combined with ezetimibe can be useful. (IIa, B-R)</li><li>In adults 40-75 years of age with LDL-C 70-189 mg/dL (1.7 to 4.8 mmol/L)who have a 10-year ASCVD risk 7.5 or higher, chronic inflammatory disorders and HIV are risk enhancing factors and in risk discussion favor moderate intensity statin or high-intensity statin therapy. (IIa, B-NR)</li><li>In patients with heart failure with reduced ejection fraction attributable to ischemic heart disease who have a reasonable life expectancy (3-5 years) and are not already on a statin because of ASCVD, clinicians may consider initiation of moderate-intensity statin therapy to reduce the occurrence of ASCVD events. (IIb, B-R) </li></ul><h5>Hypertriglyceridemia</h5><ul><li>In adults 40 to 75 years of age with moderate or severe hypertriglyceridemia and ASCVD risk 7.5% or higher, it is reasonable to re-evaluate ASCVD risk after lifestyle and secondary factors are addressed, and consider a persistently elevated triglyceride level as a factor favoring initiation or intensification of statin therapy.  (IIa, B-R)</li><li>In adults 40-75 years with severe hypertriglyceridemia (fasting triglycerides ≥500 mg/dL [≥5.6 mmol/L]) and ASCVD risk 7.5% or higher, it is reasonable to address reversible causes of high triglyceride and to initiate statin therapy.( IIa, B-R)</li><li>In adults with severe hypertriglyceridemia (fasting triglycerides ≥ 500 mg/dL [≥ 5.7 mmol/L]) and especially fasting triglycerides ≥ 1000 mg/dL (11.3 mmol/L)), it is reasonable to identify and address other causes of hypertriglyceridemia; and if triglycerides are persistently elevated or increasing, to further reduce triglycerides by implementation of a very low fat diet, avoidance of refined carbohydrates and alcohol, consumption of omega-3 fatty acids and if necessary to prevent acute pancreatitis, fibrate therapy. (IIa, B-NR)</li></ul>",
      adviceTherapyImpact: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
      email: "Statin initiation is indicated in the context of a clinician-patient risk discussion.",
      ldlgaLabel: "",
      id: 11
    }

  },
  smokingAdviceText: {
    DUMMY: {
      adviceTherapyImpact: "Address smoking cessation as needed.",
      email: "Address smoking cessation as needed."
    },
    CASE1: {
      conditional: "typeSmoker == 'Never'",
      adviceSmokingSection: "",
      adviceSmokingSGR: "<h4 class='italic'>Supporting Guideline Recommendations<sup>*</sup></h4><ul><li>All adults should be assessed at every visit for tobacco use and their tobacco use status recorded as a vital sign to facilitate tobacco cessation. (I, A)</li><li>Secondhand smoke (SHS) exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR) <br> -	There is no safe lower limit of exposure to SHS. <br> -	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  <br>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.</li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the<a class='link' target='_blank' href='http://www.onlinejacc.org/content/early/2019/03/07/j.jacc.2019.03.010'> 2019 ACC/AHA Primary Prevention Guideline. </a>All other advice is derived from <a class='link' target='_blank' href='https://www.jacc.org/doi/10.1016/j.jacc.2018.10.027'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation</a></p>",
      adviceTherapyImpact: "Assess for tobacco use at every visit and avoid second hand smoke. ",
      email: "Assess for tobacco use at every visit and avoid second hand smoke.",
      smokinggaLabel: "",
      id: 1
    },
    CASE2: {
      conditional: "typeSmoker == 'Current'",
      adviceSmokingSection: "<p><b>To reduce ASCVD risk:</b></p><ul><li>Tobacco abstinence is recommended (I, B), firmly advise patient to quit. (I,A)</li><li>Use combination of behavioral interventions plus pharmacotherapy. (I,A)</li><li>Avoid exposure to secondhand smoke. (III: Harm, B)</li><li>Assess tobacco use at every visit. (I,A)</li><li>Make a follow-up plan.</li></ul><p>See below for more information on each of these steps.</p>",
      adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>To facilitate tobacco cessation in adults and optimize outcomes:</b></p><ul><li>Assess at every visit for tobacco use and record tobacco use status as a vital sign. (I, A)<br>   Consider including the following in your assessment: <ul class='list-type-none'><li>-<a class='link' data-open='heaviness-of-smoking'>	Heaviness of Smoking Index</a></li><li>-	Other indicators of nicotine dependence: <ul class='list-type-circle'><li>Early initiation of exposure to nicotine</li><li>Difficulty reducing and/or refraining from smoking for extended periods of time</li><li>Evidence of withdrawal symptoms upon abstinence from smoking</li><li>Continued use despite knowledge of harm from smoking</li></ul></li><li>- Other factors that influence the likelihood of smoking relapse: <ul class='list-type-circle'><li>Degree of motivation to stop smoking</li><li>Perceived confidence in the ability to stop smoking</li><li>Presence of a comorbid psychiatric disorder</li><li>Other substance use</li><li>Living with a smoker</li></ul></li></ul></li><li>Firmly advise patient to quit. (I, A)<p>Advice should be tailored to the individual’s specific health situation and should emphasize the benefits of stopping smoking, rather than focusing solely on the harms of continued smoking.</p><ul class='list-type-none'><li>-	<u>If patient is not yet ready to quit</u><ul class='list-type-circle'><li>Use Motivational interviewing (risks, rewards, roadblocks). &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Motivational interviewing is a goal-oriented, client-centered counseling style that aims to elicit behavior change by helping smokers explore and resolve ambivalence about making changes in their behavior. The method relies on the counselor eliciting from the client their own motivations for change, rather than imposing a treatment plan on the smoker.' data-tooltip></i> </li><li>	Prescribe or provide free sample of smoking cessation medications as part of a plan to gradually reduce quantity smoked.</li><li>	Discuss the use of non-combustible tobacco product if not interested in using stop smoking medications.</li><li>Advise patient to adopt smoke-free home and car policy.</li></ul></li><li>-	<u>If patient is ready to quit</u>:<ul class='list-type-circle'><li>Encourage patient to set a quit date, usually within the next month, to provide a structure for the quit attempt.</li></ul></li></ul></li><li>Use combination of behavioral interventions plus pharmacotherapy to maximize quit rates.  (I, A)<ul  class='list-type-none'><li>-	<u>When using behavioral interventions</u> &nbsp;<i class='fa fa-info-circle tip-bottom custom-size' style='display: inline-block;' title='Please see the Resources section for examples of behavioral interventions and for behavioral support resources.' data-tooltip></i> <ul class='list-type-circle'><li>Either clinician or office staff should connect a smoker to his/her preferred form of behavioral support.</li><li>Patient should leave the visit with a set of freely available resources and a plan and timeline for accessing the referred behavior therapy. </li></ul></li><li>-	<u>When using pharmacotherapy</u><ul class='list-type-circle'><li>Offer to every patient who is willing to accept it.</li><li>Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul></li></ul></li><li>Secondhand smoke exposure should be avoided to reduce ASCVD risk.  (III: Harm, B-NR)<ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></ul></li></ul><p><b>When planning follow-up</b></p><ul class='list-type-none'><li>-<u>	In patients ready to quit</u>:<ul class='list-type-circle'><li>Reassess patient by phone call or office visit within 2 to 4 weeks of the initial visit.</li><li>Should include assessing smoking status, asking about adherence and response to treatments, providing support, and addressing any issues.</li><li>If ready to quit, refer/connect to stop smoking treatments.</li></ul></li><li>-	<u>In patients not yet ready to make a quit attempt</u>:<ul class='list-type-circle'><li>Reassess patient within 1 month by phone call or office visit.</li><li>If ready to quit after reassessment, refer/connect to stop smoking treatments.</li><li>If still not ready to quit, maintain continuous engagement to quit at every visit and repeat provision of treatment as above.</li></ul></li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='http://www.onlinejacc.org/content/early/2019/03/07/j.jacc.2019.03.010'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='https://www.jacc.org/doi/10.1016/j.jacc.2018.10.027'> ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a> </p>",
      adviceTherapyImpact: "Advise patient to quit. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke. ",
      email: "Advise patient to quit smoking. Use combination of behavioral and pharmacotherapy. Avoid second hand smoke.",
      smokinggaLabel: "",
      id: 2
    },
    CASE3: {
      conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 1",
      adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
      adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawal.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td>More than 6 months ago – Lower risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Offer treatment if requested.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to secondhand smoke (SHS).</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li></li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='http://www.onlinejacc.org/content/early/2019/03/07/j.jacc.2019.03.010'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='https://www.jacc.org/doi/10.1016/j.jacc.2018.10.027'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
      adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke.  ",
      email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
      smokinggaLabel: "",
      id: 3
    },
    CASE4: {
      conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id == 2",
      adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
      adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Assess risk of relapse based upon time since last smoked</b><p><table class='table'><thead><th>How long ago did patient quit smoking?</th><th class='top-aligned'>Next steps</th></thead><tbody><tr><td class='top-aligned'>Less than 1 month – Highest risk for relapse</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Start and/or intensify pharmacotherapy to address nicotine withdrawl.</li><li>Connect patients to behavioral/psychosocial treatment program.</li><li>Monthly follow up contact with referral to treatment if relapsed.</li></ul></td></tr><tr><td class='top-aligned'>1-6 months ago – Moderately high risk</td><td><ul class='list-type-circle'><li>Ask about smoking status on follow-up visits.</li><li>Continue/adjust pharmacotherapy as needed.</li><li>Monthly follow-up contact with referral to treatment if relapsed.</li></ul></td></tr></tbody></table><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'> Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='http://www.onlinejacc.org/content/early/2019/03/07/j.jacc.2019.03.010'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='https://www.jacc.org/doi/10.1016/j.jacc.2018.10.027'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
      adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
      email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
      smokinggaLabel: "",
      id: 4
    },
    CASE5: {
      conditional: "typeSmoker == 'Former' && quitSmoking != undefined && quitSmoking.id >= 3",
      adviceSmokingSection: "<ul class='list-type-none'><li>-	At every visit, assess tobacco use (I,A) and risk of relapse based on time since last smoked.</li><li>-	For best results with smoking cessation medication, encourage use for at least 3 and, preferentially, 6 months. </li><li>-	Make a follow-up plan.</li><li>-	Avoid exposure to secondhand smoke (III: Harm, B)</li></ul><p>See below for more information on each of these steps.</p>",
      adviceSmokingSGR: "<h4 class='italic'>Supporting Expert Consensus Advice<sup>*</sup></h4><p><b>Patients who quit 6 or more months ago are at lower risk for relapse. For these patients: </b><p><ul class='list-type-none'><li>-	Ask about smoking status on follow-up visits.</li><li>-	Offer treatment if requested.</li></ul><p><u>When using pharmacotherapy</u></p><ul class='list-type-none'><li>-	Offer to every patient who is willing to accept it.</li><li>-	Prescriptions should be written even for over-the-counter medications because insurance plans might cover them.</li><li>-	Individuals using smoking cessation medications should be encouraged to continue use for at least 3 months.</li><li>-	Extended use of medications for up to 6 months has been shown to increase long-term abstinence.</li><li>-	Download ACC’s <a class='link' target='_blank' href='https://www.acc.org/~/media/Non-Clinical/Files-PDFs-Excel-MS-Word-etc/Guidelines/2018/Tobacco-Cessation-Clinician-ToolFINAL112918.pdf?la=en'>Tobacco Cessation Medications Reference Tool</a>  for more information</li></ul><p><b>Avoid secondhand smoke (SHS) exposure to reduce ASCVD risk.  (III: Harm, B-NR)</b></p><ul class='list-type-none'><li>-	There is no safe lower limit of exposure to SHS.</li><li>-	SHS exposure is known to cause cardiovascular disease and stroke in nonsmokers and can lead to immediate adverse events.  </li><li>-	SHS exposure in nonsmokers is associated with increased risks of ischemic heart disease, atrial fibrillation, peripheral artery disease, and poorer quality of life in heart failure patients.  </li><li>-	Assess all former smokers for SHS exposure and advise adopting smoke-free policy for home and car. </li></ul><p><sup>*</sup>Recommendations labeled with a (COR, LOE) designation are derived from the <a class='link' target='_blank' href='http://www.onlinejacc.org/content/early/2019/03/07/j.jacc.2019.03.010'>2019 ACC/AHA Primary Prevention Guideline </a>. All other advice is derived from <a class='link' target='_blank' href='https://www.jacc.org/doi/10.1016/j.jacc.2018.10.027'>ACC’s 2018 Expert Consensus Pathway on Tobacco Cessation </a></p>",
      adviceTherapyImpact: "Assess for relapse at every visit. If using medications, encourage use for at least 3-6 months. Avoid secondhand smoke. ",
      email: "Assess for relapse. If using,  continue medications for at least 3-6 months. Avoid secondhand smoke.",
      smokinggaLabel: "",
      id: 5
    },
  },
  aspirinAdviceText: {
    DUMMY: {
      conditional: "",
      adviceTherapyImpact: "some aspirin advice here",
      adviceAspirinSection: "some aspirin advice here",
      email: "some aspirin advice here",
      id: 0
    },
    CASE1: {
      conditional: "age >= 40 && age <= 70 && cvRisk <= 4.9",
      adviceTherapyImpact: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
      adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>ACC/AHA 2018 Guideline found there is no justification for the routine administration of low-dose aspirin for the primary prevention of ASCVD among adults at low estimated ASCVD risk.</b> </li></ul>",
      email: "No justification found in for routine aspirin use in patients with low ASCVD risk.",
      id: 1
    },
    CASE2: {
      conditional: "age >= 40 && age <= 70 && cvRisk >= 5",
      adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) might be considered for select patients at higher risk and age 40-70.",
      adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4><ul><li><b>Low dose aspirin (75-100 mg oral daily) may be considered for primary prevention of ASCVD among select higher risk ASCVD adults aged 40-70 years who are not at increased bleeding risk. (IIb, A)</b><ul class='list-type-none'><li>-	Given the narrow balance between benefits and harms of prophylactic aspirin, there is less justification for aspirin use at doses >100 mg daily for primary prevention.  </li><li>-	Meta-analyses suggest that the ASCVD benefit for low-dose aspirin is equivalent to high-dose aspirin, but the bleeding risk is higher.  </li><li>-	Low-dose prophylactic aspirin may be best justified among high-ASCVD risk persons who cannot achieve optimal control of other ASCVD risk factors.</li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul> ",
      email: "Can consider low dose aspirin for select higher risk patients.",
      id: 2
    },
    CASE3: {
      conditional: "age > 70",
      adviceTherapyImpact: "Low dose aspirin (75-100 mg oral daily) should not be administered for primary prevention in adults over 70 years old.",
      adviceAspirinSection: "<h4 class='italic'>Supporting Guideline Recommendations</h4> <ul><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered on a routine basis for the primary prevention of ASCVD among adults > 70 years old. (III: Harm, B-R)</b><ul class='list-type-none'><li>-	For adults < 40 years there is insufficient evidence to judge the risk-benefit of routine aspirin for primary prevention.</li><li>-	There is insufficient evidence to determine whether there may be select circumstances where physicians might discuss prophylactic aspirin with adults <40 or >70 years in the setting of other known ASCVD risk factors (e.g. strong family history of premature MI, inability to achieve lipid or BP targets, or significant elevation in CAC).</li><li>-	There is no justification for the routine administration of low-dose aspirin for primary prevention among adults at low estimated ASCVD risk.  </li></ul></li><li><b>Low-dose aspirin (75-100 mg oral daily) should not be administered for primary prevention of ASCVD among adults at any age who are at increased risk for bleeding. (III: Harm, C-LD)</b><ul class='list-type-none'><li>-	A non-exhaustive list of conditions associated with increased bleeding risk includes: history of GI bleeding or peptic ulcer disease or bleeding at other sites, age > 70 years, thrombocytopenia, coagulopathy, chronic kidney disease, or concurrent use of other medications that increase bleeding risks such as NSAIDs, steroids, DOACs or warfarin.</li></ul></li></ul>",
      email: "Do not use low dose aspirin for prevention in patients 70 or older.",
      id: 3
    }
  },
  diabetesAdviceText: {
    DUMMY: {
      conditional: "",
      adviceTherapyImpact: "some diabetes advice here",
      adviceDiabetesSection: "some diabetes advice here",
      email: "some diabetes email advice here",
      id: 0
    },
    CASE1: {
      conditional: "diabetic === true",
      adviceTherapyImpact: "Dietary counseling and ≥ 150 minutes/week of moderate intensity or ≥75 minutes/week of vigorous physical activity recommended. Metformin as first line drug to improve glycemic control to reduce CVD may be considered.",
      adviceDiabetesSection: "<div class='columns small-12'><b><u>In patients who have A1c > 6.5% consistent with type 2 diabetes</u></b><ul class='list-type-none'><li>- Dietary counseling regarding key aspects of a heart healthy diet is recommended (I, A)</li><li>- At least 150 minutes/week of moderate intensity or 75 minutes/week of vigorous physical activity is recommended (I, A)</li><li>- Metformin as a first line pharmacologic therapy to improve glycemic control and reduce CVD risk may be considered (IIa, B-R)</li></ul></div><div class='columns small-12'><b><u>After assessing response to lifestyle therapies and metformin</u></b><ul><li><b>If A1c < 7.0% NOT achieved, and</b><ul class='list-type-none no-margin'><li>- If patient has other CVD risk factors, consideration may be given to an SGLT-2i or a GLP-1R agonist to improve glycemic control and reduce CVD risk (IIb, C-LD) </li><li>- If no additional CVD risk factors, further management of diabetes per primary care provider or endocrinology is suggested</li></ul></li><li><b>If A1c < 7.0% is achieved</b><ul class='list-type-none no-margin'><li>- Reinforce importance of diet and physical activity and continue current management</li></ul></li></ul></div>",
      email: "With T2D, use dietary counseling, moderate intensity activity ≥ 150 min/wk or vigorous intensity %0D%0Aactivity ≥ 75 min/wk, and metformin as first line glycemic control.",
      id: 1
    },
    CASE2: {
      conditional: "diabetic === false",
      adviceTherapyImpact: "N/A",
      adviceDiabetesSection: "Diabetes management advice not applicable for this patient. ",
      email: "No T2D present.",
      id: 2
    }
  },
  emailTemplate: {
    subjectLine: 'ASCVD Risk #gender#/#age#y (generated on #timestamp#)',
    tenyearriskHeadline: '----ASCVD RISK----%0D%0A',
    tenyearrisk: 'PREVIOUS 10-YR: #baselinerisk#%0D%0A',
    followuprisk: 'CURRENT 10-YR: #followuprisk#%0D%0A',
    lifetimerisk: 'LIFETIME: #lifetimerisk#%0D%0A',
    optimalrisk: 'OPTIMAL: #optimalrisk#%0D%0A',
    patientinformation: '----PATIENT INFORMATION----%0D%0ASex : #sex#%0D%0ARace: #race#%0D%0A',
    baseline: '%0D%0A----PREVIOUS VISIT----%0D%0AAge : #age#',
    followup: '%0D%0A----CURRENT VISIT----%0D%0AAge : #age#',
    labs: '%0D%0ATotal Chol : #totalCholesterol#%0D%0AHDL Chol: #hdlCholesterol#%0D%0ASystolic BP: #bloodPresure#%0D%0ADiastolic BP: #dbloodPressure#',
    ldl: '%0D%0ALDL Chol: #ldlCholesterol#',
    personalHistory: '%0D%0ADiabetic : #diabetic#%0D%0ASmoker: #smoker#%0D%0AOn HTN Treatment: #hypertension#',
    desclaimer: 'This email contains a summary of the advice from the ASCVD Risk Estimator Plus App. Email content generated by the app does not contain protected health information. Users are advised to refrain from sharing personally identifiable patient information via unsecured email or other sources.',
    advice: '%0D%0A----ADVICE----%0D%0A#bpadvice#%0D%0A#ldladvice#%0D%0A#diabetesadvice#%0D%0A#smokingadvice#%0D%0A#aspirinadvice#'
  },
  gdprBanner: {
    bannerText: '<h1>This site uses cookies to improve your experience.</h1> By continuing to use our site, you agree to our <a href="https://www.acc.org/footer-pages/cookie-policy" target="_blank"> Cookie Policy</a>, <a href="https://www.acc.org/footer-pages/privacy-policy" target="_blank"> Privacy Policy</a> and <a href="https://www.acc.org/footer-pages/terms-and-conditions" target="_blank"> Terms of Service</a>.',
    buttonText: 'OK'
  }

}
