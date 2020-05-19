---
#----------casestudy page----------#
title: "Fear of falling in patients with vertebral fractures"
smallTitle: "Fear of fall in patients with vertebral fractures"
subHeader: "Quantile regression approach for non-normal outcome"
image : images/casestudies/vf.svg
client: PhD Student
country: United Kingdom
sector: Health and Medical
service: Dissertation Statistical Consulting
serviceUrl: dissertation-statistical-consulting/
startdate: 11/08/2018
enddate:  15/08/2018
review: "I am glad that I found Chetan in difficult, stressful time, he quickly get on with my work and submitted detailed, thorough analysis on time"

#------------general------------#

date: 2020-04-10
description : "Statistical analysis of cohort study using quanitle regression"
slug: "vf-quantile-regression"
filterCategories: health-medical, dissertation-statistical-consulting
---

## Overview

Vertebral fractures are common, mostly seen in patients with osteoporosis.In this group, there is reduced physical activity through fear of falling. PhD student from reputed UK university consulted us to provide a detailed statistical analysis and report. 

## Challenges

- The outcome - total FES score was not normally distributed. When your outcome have skewed distribution, the standard, linear regression is not applicable as it requires the outcome to have normal distribution. We need to use alternative method which does not rely on distribution. We need distribution free method-one is quantile regression.
- Client needs the figures which should be publication quality and follow the journal guidelines
- The statistical findings should be interpretable to lay-audience
- The assumption of statistical model needs to be met in order to provide unbiased, valid conclusion

## Statistical approach

Instead of linear regression, we have used quantile regression to estimate difference in median in three scenario: no fracture vs mild fracture, no fracture vs mild or moderate/sever fracture and mild fracture vs moderate/sever fracture. Linear regression based on assumption that the errors are normally distributed. This assumption will not be valid in his data. As shown in figure, the distribution of total FES score positively skewed. Linear regression provide difference in mean total FES score whereas quantile regression provide difference in median. In quantile regression, there is no specific distribution assumption are made so it can provide valid estimates and more suited to current data. First, we fitted quantile regression to total FES score and individual component (questions) of FES score without adjusting any co-variate (unadjusted analysis) and then, we adjusted for age, baseline mobility, back-pain at follow up  and other baseline co-variate – baseline steroid use, presence of osteoporosis, illness and alcohol use sequentially. We have reported median and interquartile range (IQR) for total FES score and individual questions of FES scale as summary statistics and, then provided median difference (95% CI) of total FES score in three comparison:  None Vs Mild, None Vs Moderate/Sever and Mild Vs Moderate/sever fracture.

{{< figure class="text-center" src="non-normal-distribution-quantile-regression.svg" title="Distribution of total FES scores in no, mild and moderate/sever fracture"  alt="Non-normal distribution of outcome">}}


## Outcome:

The analyses were completed on time with detailed report explaining statistical methods and findings in non-technical language. The graphs were tailored to his dissertation guidelines. The data did not provide sufficient evidence to suggest there is association between between fear of falling and vertebral fracture.



