if(!_.theme_sunburst){_.theme_sunburst=1;(function($){var Oja=function(){var a=this.chart.calculationMode();return this.name+("parent-dependent"==a||"parent-independent"==a?"\n"+$.AN(this.value):"")};
$.ra($.fa.anychart.themes.defaultTheme,{sunburst:{animation:{duration:2E3},title:{text:"Sunburst Chart"},interactivity:{selectionMode:"drill-down"},radius:"45%",innerRadius:0,startAngle:0,a11y:{titleFormat:$.TN},center:{fill:"none",stroke:"none"},calculationMode:"ordinal-from-root",tooltip:{enabled:!0,title:!1,separator:!1,titleFormat:$.CN,format:Oja},leaves:{enabled:null,normal:{labels:{padding:"10%",hAlign:"center",position:"radial",format:$.CN}}},sort:"none",normal:{fill:$.EN,stroke:"#fff",labels:{adjustFontSize:[!0,
!0],maxFontSize:14,minFontSize:1,padding:[1,"5%",1,"5%"],enabled:!0,hAlign:"center",vAlign:"middle",position:"circular",anchor:"center",fontColor:"#ffffff",format:Oja}},hovered:{fill:$.KN,stroke:$.EN,labels:{enabled:null}},selected:{fill:"#333 0.85",stroke:$.EN,labels:{enabled:null}}}});}).call(this,$)}
