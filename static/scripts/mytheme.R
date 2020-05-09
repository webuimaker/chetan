theme_ISCON <- function () {
  #require(extrafont) # to have Roboto font for plots

  font <- "Roboto"
  theme_bw() %+replace%
    theme(
      text = element_text(family = "font", size = 12),
      # plotting area
      plot.margin = margin(t = 3, r = 3, b = 3, l = 3, unit = "mm"),
      plot.background = element_rect(fill="#fcfcfc", colour= "#fcfcfc"),
      panel.background  = element_rect(fill = "#fcfcfc", colour = "#fcfcfc"),
      panel.grid.minor = element_blank(),
      panel.grid.major.x = element_blank() ,
      panel.grid.major.y = element_line( size=0.3, color="#f3f3f3" ) ,

      # axis
      panel.border = element_blank(), # remove top and right border
      axis.line = element_line(size = 0.2, colour = "#b9b9b9"),

      axis.text = element_text(family = font, size = 8,face = "plain",colour = "#495057"),
      axis.text.x = element_text(margin = margin(t = 2, r = 2, b = 2, l = 2, unit = "pt")),

      axis.ticks = element_line(colour="#8c8c8c",size = 0.3),
      axis.ticks.length.y = unit(0.5, "mm"),
      axis.ticks.length.x = unit(0.5, "mm"),

      axis.title = element_text(family = font, size = 9,face = "plain",colour = "#495057"),
      axis.title.y= element_text(margin = margin(r = 8, l =0 , unit = "pt"), angle = 90),
      axis.title.x= element_text(margin = margin(t = 5, b =0 , unit = "pt")),
      # plot descriptive Text
      plot.title = element_text(family = font, size = 14,face = "bold",colour = "#cf0300",hjust =0,vjust = NULL,margin=margin(2,0,2,0)),
      plot.subtitle = element_text(family = font, size = 12,face = "plain",colour = "#495057",hjust =0,vjust = NULL,margin=margin(2,0,8,0)),
      plot.caption = element_text(family = font, size = 10,face = "italic",colour = "#495057",margin=margin(0,0,0,0),hjust =1,vjust = NULL),

      # legend
      legend.background= element_rect(fill="#fcfcfc", colour= "#fcfcfc",size = NULL,
                                      linetype = NULL),
      legend.margin = margin(t = 0, r = 0, b = 0, l = 0, unit = "mm"),
      legend.spacing.x =unit(1, "mm"),
      legend.spacing.y = unit(0, "mm"),
      legend.key = element_blank(),
      legend.key.size = unit(4, "mm"),
      #legend.key.height,
      #legend.key.width,
      legend.text = element_text(family = font, size = 9,face = "plain",colour = "#495057",hjust = NULL, vjust = NULL),
      #legend.text.align,
      legend.title = element_text(family = font, size = 9,face = "plain",colour = "#495057",hjust = NULL, vjust = NULL),
      #legend.title.align,
      legend.position = "top",
      legend.direction = "horizontal", # arrangement of legend keys
      legend.justification = "left", # justfiication of legend group

      #legend.box,
      #legend.box.just,
      ## legend.box.margin,
      ## legend.box.background,
      # legend.box.spacing

      # facet plots
      strip.background = element_rect(color="black", fill="lightgrey"),
      strip.text = element_text(family = font, size = 10,face = "plain",colour = "black",margin=margin(2,0,2,0))

    )
}
