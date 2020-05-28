if (file.exists("~/.Rprofile")) {
  base::sys.source("~/.Rprofile", envir = environment())
}

options(
  blogdown.author = "Chetan Prajapati",
  blogdown.ext = ".Rmd",
  blogdown.subdir = "learn-statistics",
  blogdown.yaml.empty = TRUE,
  blogdown.new_bundle = TRUE,
  blogdown.title_case = TRUE
)

# table of content
source("static/scripts/render_toc.R")

# custom ggplot theme
source("static/scripts/mytheme.R")
setHook(packageEvent("ggplot2", "onLoad"),
        function(...) ggplot2::theme_set(ggplot2::theme_ISCON()))
library(ggplot2)
library(blogdown)

# permanent knitr options
setHook(packageEvent("knitr", "onLoad"),
        function(...) knitr::opts_chunk$set(echo = TRUE, message= FALSE, warning=FALSE,cache = FALSE, autodep = FALSE,comment = NA,dev = "svg" ))
library(knitr)
