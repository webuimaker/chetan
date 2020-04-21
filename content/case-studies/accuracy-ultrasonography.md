---
title: "Case Study: How many reading I need in Ultrasonography"
smallTitle: "Reliability in ultrasonography"
subHeader: "Statistical approach: Intra class corelation"
image : images/casestudies/asthma/asthma.jpg
slug: "ultra-roc"

date: 2020-04-02
description : "This is meta description"

client: NHS Consultant
country: United Kingdom
sector: Finanace and Economics
service: Clinical-trial Design and Analysis
startdate: 08/07/2019
enddate:  12/07/2019
review: "Quality statistical work yet at affordable cost. Explained the difficult statistical concept clearly, quick turnaround time"

caseStudy : '#'
filterCategories: finanace-economics, clinical-trials-design-analysis
---

### Overview

NHS specialist consultant performed population-based case-control study in UK based hospital with aim to identify important risk factor in development of Asthma and to find factors that has excellent discriminative ability between cases and control. The consultant has very limited statistical knowledge, was looking for statistician that not only provide statistical results but also explain the results in non-technical language as he needs to present this finding in international conference.

### Challenges

- Sample data has high proportion of missing observations. Missing observation pose significant challenge to validity and reliability of statistical findings
- The statistical findings should be interpretable to lay-audience
- The assumption of statistical model needs to be met in order to provide unbiased, valid conclusion

### Statistical approach

ISCON statistician apply Poisson regression model (rather than logistic model for binary outcome) based on explanatory factors so that the findings can be presented as risk ratio rather than odds ratio (which is difficult to interpret). Our statistician build model in both, observed data and on data with multiple imputation of missing observations using MICE (multiple imputation with chain equations). To find predictive ability of the factors, ROC (Receiver Operating Curve) analysis has been performed.

### Outcome:

The project completed on time with detailed report explaining statistical methods and findings in non-technical language. Multivariate model after missing data imputation (under MAR assumption of missingness) provided an evidence that BMI and FEV1 are important predictors of events of Asthma exacerbation. 1 unit increase in BMI found to be associated with 4% increased risk of Asthma exacerbation (95% CI 1%,8%, P 0.01) and patient with high FEV1 has lower risk of events. 1 unit increase in FEV1 values found to reduce the risk by 1% (95% CI 0.3,2%, P 0.007). None of the parameter (FEV1, FeNO, ACT, BMI and exposure to smoking) has excellent discriminative ability between those who has asthma exacerbation and who had not. ACT has found to have higher AUC compared to others though require more data to confirm the findings. DeLong, DeLong, and Clarke-Pearson (1988) test the the null hypothesis of equality of AUC for compared parameters. In given data, test did not provide any evidence to suggest that at least one parameter has different discrimating ability between those who has asthma exacerbation and who had not (Chi-Square 5.5 df 4, P-value 0.27).



