---
#----------casestudy page----------#
title: "In vitro fertilisation (IVF) or Intra-cytoplasmic sperm injection (ICSI)? Which is better option"
smallTitle: "IVF or ICSI : Which is better?"
subHeader: "Modified Poisson regression (Poisson regression with a robust standard errors)"
image : images/casestudies/ivf-icsi.svg
client: Fertility Clinic
country: United Kingdom
sector: Health and Medical
service: Statistical Analysis & Modelling
serviceUrl: statistical-analysis-modelling/
startdate: 10/09/2019
enddate:  22/09/2019
review: "Needed quick but more rigorous analysis of the large dataset. Chetan did an amazing job in both ,analysis and in explaining alien statistical concepts to us. Thank you!"

#------------general------------#

date: 2020-01-10
description : "Statistical analysis of population based cohort study using Modified Poisson Regression Model with adjustment to covarites"
slug: "ivf-icsi-modified-poisson"
filterCategories: health-medical, statistical-analysis-modelling
---
## Overview

In Vitro Fertilisation (IVF) and Intracytoplasmic Sperm Injection (ICSI) are two of the most common fertility treatments. The main difference between IVF and ICSI is how the sperm fertilises the egg. In IVF, the egg and sperm are left to fertilise on their own. In ICSI, one sperm is directly injected into the egg. Currently, ICSI is the treatment of choice for couples with male factor infertility or with previous low fertilisation rates. An "ICSI for all" approach has been suggested as the treatment of choice in all cases requiring assisted conception. However, previous studies comparing IVF and ICSI have shown inconsistent results. The well-known fertility clinical apprached us to provide  them solid statistical evidence of which treatment is superior in different patient types

## Challenges

- large dataset
- The statistical findings should be interpretable to lay-audience
- The assumption of statistical model needs to be met in order to provide unbiased, valid conclusion

## Statistical approach

We used generalised linear model (GLM) with Poisson distributed errors to model the number of events (and rates). We reported results from both unadjusted(crude) and adjusted models. The models for live birth rate and clinical pregnancy rate were adjusted for age of female, number of embryos transferred and day of embryo transfer. The models for implantation rate and live birth per embryo transfer were only adjusted for number of live births and number of embryos transferred. The models for fertilisation rate and miscarriage rate were adjusted for age. The overdispersion in the model if present, has been corrected by estimating model parameters by quasi-likelihood. We used robust standard errors in each model. The goodness of fit of the model was assessed via residuals and fitted values plots and residual deviance test.

We have used linear regression model to evaluate whether success rate of both treatments was significantly different over time. 

{{< figure class="text-center" src="ivf-icsi.svg" title="Proportion of live birth (success rate) in IVF and ICSI overtime"  alt="Bar graph showing proportions of live birth by treatment type from 2000-2016">}}

## Outcome:

The project completed on time with detailed report explaining statistical methods and findings in non-technical language. Multivariate model after adjusting of covarites provided an  evidence that ICSI ,compared to conventional IVF is associated with lower implantation, clinical pregnancy and live birth rates in women undergoing their first treatment cycle. These findings where consistent in cycles with and without male-infertility, across different age groups and different time periods.
