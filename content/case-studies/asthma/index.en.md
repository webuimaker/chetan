---
#----------casestudy page----------#
title: "What are the risk factors associated with acute asthma exacerbation in children ? Do any of these factors have predictive ability?"
smallTitle: "Predictive risk factors for Asthma"
subHeader: "Poisson Regression | Multiple Imputation of Missing Data (MICE) | ROC curve analysis"
image : images/casestudies/asthma.svg
client: NHS Consultant
country: United Kingdom
sector: Health and Medical
service: Statistical Analysis & Modelling
serviceUrl: statistical-analysis-modelling/
startdate: 08/07/2019
enddate:  12/07/2019
review: "Quality statistical work yet at affordable cost. Explained the difficult statistical concepts clearly, quick turnaround time"

#------------general------------#

date: 2020-04-10
description : "Statistical analysis of case-control study using Poisson Regression Model, Multiple Imputation of Missing Data (MICE) & Receiver Operating Characteristic (ROC) curve analysis"
slug: "asthma-poisson-mice-roccurve"
filterCategories: health-medical, statistical-analysis-modelling
---

## Overview

NHS specialist consultant performed population-based case-control study in the UK with aim to identify important risk factors in development of acute asthma exacerbation in children. The aims was also to find factors that has excellent discriminative  ability between cases and control. The consultant has very limited statistical knowledge, was looking for statistician that not only provide statistical results but also explain the results in non-technical language as he needs to present this finding in international conference.

## Challenges

- Sample data has high proportion of missing observations. High proportion of missing observation (more than 10%) pose significant challenge to validity and reliability of statistical findings
- The statistical findings should be interpretable to lay-audience
- The assumption of statistical model needs to be met in order to provide unbiased, valid conclusion

## Statistical approach

The relationship between FEV1 (Forced expiratory volume in one second), FeNO (Fraction of exhaled nitric oxide), ACT (asthma control test), obesity and exposure to smoking and Asthma exacerbation within one year from evaluation were explored using Poisson regression. The binary outcomes generally investigated by logistic regression which is based on binomial distribution. However, the estimates provided by logistic regression – odds ratio is not very intuitive and difficult to interpret. The Poisson regression, based on Poisson distribution yields risk ratio (RR) which simplifies the interpretation. Zou (2004) recommended modified Poisson regression approach which is standard Poisson regression but the standard errors are calculated using different approach (using sandwich variance estimator).

The proportion of missing observations are reported overall, in cases and in controls (Table 1). There was negligible amount of missing observations in predictors which ranges from 0% to 2% except, in ACT and FeNO where there was significant amount of missing observations (62%, 20% respectively). Complete case analysis in this regard will incur significant amount of sample data, reducing power and increases the risk of bias conclusion. Therefore, using multiple imputation using chain equation (MICE) technique, both ACT and FeNo were imputed.

{{< figure class="text-center" src="Receiver-Operating-Characteristic-roc-curve-analysis.svg" title="Assesment of discriminating ability of factors between cases and controls using ROC curves"  alt="Receiver Operating Characteristic roc curve analysis using area under curve(AUC)">}}

The predictive ability of different parameters was assessed through Receiver Operating Characteristic (ROC) analysis. In ROC curve, each point is generated using the outcome of fitted logistic model (case or control) for given cut-off points (predictive probability of the event) and computing the corresponding sensitivity and 1−specificity. Sensitivity is true positive rate i.e. proportion of cases who are correctly identified by a statistical model as cases) and 1- specificity is false positive rate: proportion of control who are correctly identified by a model as control).

The five different parameters’ ability to discriminate between state (cases or control) were compared using area under ROC curve (AUC). Hosmer-Lemeshow (2000, p. 162) suggests that that AUC of 0.5 signifies no discrimination, AUC of between 0.7 and 0.8 signifies acceptable discrimination, AUC of between 0.8 and 0.9 signifies excellent discrimination, and AUC greater than 0.9 is considered outstanding discrimination.

## Outcome:

The project completed on time with detailed report explaining statistical methods and findings in non-technical language. Multivariate model after missing data imputation (under MAR assumption of missingness) provided an evidence that BMI and FEV1 are important predictors of events of Asthma exacerbation. None of the parameter (FEV1, FeNO, ACT, BMI and exposure to smoking) has excellent discriminative ability between those who has asthma exacerbation and who had not. ACT has found to have higher AUC compared to others though require more data to confirm the findings. DeLong, DeLong, and Clarke-Pearson (1988) test the the null hypothesis of equality of AUC for compared parameters. In given data, test did not provide any evidence to suggest that at least one parameter has different discrimating ability between those who has asthma exacerbation and who had not (Chi-Square 5.5 df 4, P-value 0.27).



