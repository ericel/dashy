"use strict";angular.module("dashyAppApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngSanitize","ngTouch","ui.router","ui.router.title","easypiechart","chart.js","ds.clock","datatables"]).config(["$controllerProvider","$stateProvider","$urlRouterProvider",function(a,b,c){a.allowGlobals(),c.otherwise("/home"),b.state("home",{url:"/home",templateUrl:"views/main.html",controller:"MainCtrl",resolve:{$title:function(){return"Welcome To Dashy"}}}).state("dashykeymetrics",{url:"/dashykeymetrics",templateUrl:"views/dashy2.html",controller:"Dashy2Ctrl",resolve:{$title:function(){return"Dashy Key Metrics"}}}).state("dashydataview",{url:"/dashydataview",templateUrl:"views/dashy3.html",controller:"Dashy3Ctrl",resolve:{$title:function(){return"Dashy Data View"}}})}]);var toggle_btn=$(".toggle-side");$(".menu li span").hasClass("closed")||($(".menu li").find("span").addClass("closed"),$(".menu li").mouseenter(function(){$(this).find(".closed").show()}),$(".menu li ").mouseleave(function(){$(this).find(".closed").hide()})),$(".icon-menu").click(function(){return $("body").hasClass("opened")?($(".menu").animate({width:"59px"},300),$(".container").animate({paddingLeft:"10px"},300),$("body").removeClass("opened"),$(".menu li").find("span").addClass("closed"),$(".menu li").find("span").hide()):($(".menu").animate({width:"193px"},300),$(".container").animate({paddingLeft:"150px"},300),$("body").addClass("opened"),$(".menu li").find("span").removeClass("closed"),$(".menu li span").show()),!1}),$(".searchbtn").click(function(){$(".searchform").toggle("slide")}),$("html").click(function(){$("body").hasClass("opened")&&($(".menu").animate({width:"59px"},300),$(".container").animate({paddingLeft:"10px"},300),$("body").removeClass("opened"),$(".menu li").find("span").addClass("closed"),$(".menu li").find("span").hide())}),$(".clickable").on("click",function(){var a=$(this).data("effect");$(this).closest(".panel")[a]()}),angular.module("dashyAppApp").factory("Markers",function(){var a=[{id:"0",coords:{latitude:"45.5200",longitude:"-122.6819"},window:{title:"Portland, OR"}},{id:"1",coords:{latitude:"40.7903",longitude:"-73.9597"},window:{title:"Manhattan New York, NY"}},{id:"3",coords:{latitude:"3.848032",longitude:"11.502075"},window:{title:"Joseph T A, Yaounde"}},{id:"4",coords:{latitude:"51.048615",longitude:"-114.070846"},window:{title:"4 St SW, Calgary"}},{id:"5",coords:{latitude:"-14.235004",longitude:"-51.925280"},window:{title:"Banco De, Brazil"}},{id:"6",coords:{latitude:"31.230416",longitude:"121.473701"},window:{title:"Shanghai, China"}},{id:"7",coords:{latitude:"55.755826",longitude:"37.617300"},window:{title:"Moscow, Russia"}},{id:"8",coords:{latitude:"52.520007",longitude:"13.404954"},window:{title:"Berlin, Germany"}},{id:"8",coords:{latitude:"-33.868820",longitude:"151.209296"},window:{title:"Sydney, Australia"}}];return a}).controller("MainCtrl",["$scope","employees","Markers","$interval",function(a,b,c,d){var e=this;b.getEmployees().then(function(b){function d(a,b){return a+b}function f(){s==r?clearInterval(t):s++,$(".stats_em").text(s)}e.items=b,a.items=e.items;var g=e.items.countries.map(function(a){return a.country}),h=e.items.countries.map(function(a){return a.employ_count}),i=e.items.countries.map(function(a){return a.allissues}),j=e.items.countries.map(function(a){return a.open_issues}),k=e.items.countries.map(function(a){return a.closed_issues}),l=e.items.countries.map(function(a){return[a.country,a.employ_count]}),m=e.items.issues.map(function(a){return[a.country,a.employ_count,a.allissues,a.open_issues,a.closed_issues]});Array.prototype.insert=function(a,b){this.splice(a,0,b)},l.insert(0,["Locale","Count"]),m.insert(0,["Locale","Count","Issues","Open Issues","Closed Issues"]),a.map={center:{latitude:39.8282,longitude:-98.5795},zoom:1},a.markers=c;var n={},o={},p={},q={};n.type="GeoChart",o.type="BarChart",p.type="AreaChart",q.type="ComboChart",n.data=l,o.data=l,p.data=l,q.data=m,n.options={width:"100%",height:300,chartArea:{left:10,top:10,bottom:0,height:"100%"},colorAxis:{colors:["#70ABAF","#0E5660"]},displayMode:"world",backgroundColor:"#f5f5f5",datalessRegionColor:"#3a3633",defaultColor:"#f5f5f5"},o.options={title:"Number of employees at various company locations",chartArea:{width:"70%",height:"100%",top:30,bottom:0},hAxis:{title:"employees Number",titleTextStyle:{color:"red"}},colors:["#0E5660","#70ABAF"],is3D:!0},p.options={title:"Company Performance",hAxis:{title:"Year",titleTextStyle:{color:"#333"}},vAxis:{minValue:0}},q.options={width:400,height:240,animation:{duration:1e3,easing:"out"},vAxis:{minValue:0,maxValue:1e3}},n.formatters={number:[{columnNum:1,pattern:" #,##0.00"}]},a.chart=n,a.chart2=o,a.chart3=p,a.chart4=q,a.labels=g,a.series=["Employees","Issues","Open Issues","Closed Issues"],a.data=[h,i,j,k],a.onClick=function(a,b){console.log(a,b)},a.datasetOverride=[{yAxisID:"y-axis-1"},{yAxisID:"y-axis-2"}],a.options={responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{id:"y-axis-1",type:"linear",display:!0,position:"left"},{id:"y-axis-2",type:"linear",display:!0,position:"right"}]}};var r=h.reduce(d,0),s=0,t=setInterval(function(){f()},10);a.orderProp="s_time"}),a.optionseasy={animate:{duration:1e3,enabled:!0},barColor:"#2C3E50",scaleColor:!1,lineWidth:9,lineCap:"circle"}}]),angular.module("dashyAppApp").controller("Dashy2Ctrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("dashyAppApp").controller("Dashy3Ctrl",["$scope","employees",function(a,b){var c=this;b.getEmployees().then(function(b){c.items=b,a.items=c.items})}]),angular.module("dashyAppApp").service("employees",["$http",function(a){this.getEmployees=function(){return $.get("./data/employee.json")}}]),angular.module("dashyAppApp").run(["$templateCache",function(a){a.put("views/dashy2.html","<p>This is the dashy2 view.</p>"),a.put("views/dashy3.html",'<table datatable="ng" class="row-border hover table table-condensed table-responsive"> <thead> <tr class="success"> <th>Country</th> <th>Customer Email</th> <th>Issue</th> <th>Sub. Date</th> <th>Closed. Date</th> <th>Employee</th> <th>status</th> </tr> </thead> <tbody> <tr ng-repeat="issue in items.issues | orderBy:orderProp"> <td>{{ issue.country }}</td> <td>{{ issue.cust_email }}</td> <td>{{ issue.issu_des }}</td> <td>{{ issue.s_time }}</td> <td>{{ issue.issu_closed_time }}</td> <td>{{ issue.cus_name }}</td> <td>{{ issue.emplo_closed_name }}</td> </tr> </tbody> </table>'),a.put("views/main.html",'<div class="box-1"> <div class="row"> <div class="col-md-2 col-sm-4 col-xs-6 card-blocks"> <span class="small"><span class="glyphicon glyphicon-user"></span> Total employees</span> <div class="stat-st stats_em">1029</div> <span class="glyphicon glyphicon-chevron-up stat green"></span> Per Month Data </div> <div class="col-md-2 col-sm-4 col-xs-6 card-blocks"> <span class="small"><span class="glyphicon glyphicon-eye-open"></span> Open issues</span> <div class="stat-st stats_iss">1029</div> <span class="glyphicon glyphicon-chevron-up stat red"></span> Per Month Data </div> <div class="col-md-2 col-sm-4 col-xs-6 card-blocks"> <span class="small"><span class="glyphicon glyphicon-tint"></span> Reported issues</span> <div class="stat-st stats_em">1029</div> <span class="glyphicon glyphicon-chevron-up stat red"></span> Per Month Data </div> <div class="col-md-2 col-sm-4 col-xs-6 card-blocks"> <span class="small"><span class="glyphicon glyphicon-eye-close"></span> Closed issues</span> <div class="stat-st stats_em">1029</div> <span class="glyphicon glyphicon-chevron-down stat green"></span> Per Month Data </div> <div class="col-md-2 col-sm-4 col-xs-6 card-blocks"> <span class="small"><span class="glyphicon glyphicon-plus-sign"></span> Customer count</span> <div class="stat-st stats_em">1029</div> <span class="glyphicon glyphicon-chevron-up stat green"></span> Per Month Data </div> <div class="col-md-2 col-sm-4 col-xs-6 card-blocks"> <span class="small"><span class="glyphicon glyphicon-stats"></span> Sales count</span> <div class="stat-st stats_em">1029</div> <span class="glyphicon glyphicon-chevron-down stat red"></span> Per Month Data </div> </div> </div> <div> </div> <section> <div class="box-2"> <div class="box-2-semi"> <span class="glyphicon glyphicon-stats"></span> Live Statistics <ul class="nav nav-tabs pull-right"> <li class="active"><a href="#stat1" data-toggle="tab"><span class="glyphicon glyphicon-time"></span> Home</a></li> <li><a href="#stat2" data-toggle="tab"><span class="glyphicon"></span> Menu 2</a></li> <li><a href="#stat3" data-toggle="tab"><span class="glyphicon"></span> Menu 3</a></li> </ul> <div class="clearfix"></div> </div> <div class="tab-content bor-der"> <div id="stat1" class="tab-pane fade in active"> <div class="row"> <div class="col-xs-12 col-md-6 geospartial"> <div google-chart chart="chart"></div> </div> <div class="col-xs-12 col-md-6 bar-chart"> <div google-chart chart="chart2" style="width: 99%; height:90%"></div> <canvas id="line" class="chart chart-line" chart-data="data" chart-labels="labels" chart-series="series" chart-options="options" chart-dataset-override="datasetOverride" chart-click="onClick" height="90"></canvas> </div> </div> </div> <div id="stat2" class="tab-pane fade" style="width: 100%; height:20%"> <div style="display: block; box-sizing: border-box" class="conatainer"> <canvas id="line" class="chart chart-line" chart-data="data" chart-labels="labels" chart-series="series" chart-options="options" chart-dataset-override="datasetOverride" chart-click="onClick" width="300" height="300"></canvas> </div> </div> <div id="stat3" class="tab-pane fade"> <div class="chart4" google-chart chart="chart4" style="width: 99%; height:90%"></div> </div> </div> <div class="box-2-semi-up"> <div> <span class="" ng-repeat="item in items.countries"> <span class="charte" easypiechart ng-init="options = { animate:true, duration:1000, barColor:\'#E67E22\', scaleColor:true, lineWidth:1, lineCap:\'butt\' }" percent="item.employ_count" options="optionseasy"> <span class="percent" ng-bind="{{item.employ_count}}"></span> </span> <span class="pie-title"> {{item.country}} </span> </span>  </div> </div></div></section> <section class="sec-2 row"> <div class="col-xs-12 col-md-6"> <div class="panel panel-default"> <div class="panel-heading panelfirst"><span class="glyphicon glyphicon-map-marker marker"></span> Company Locations <span class="pull-right glyphicon glyphicon-remove closex"></span></div> <div class="panel-body"> <ui-gmap-google-map center="map.center" zoom="map.zoom" aria-label="Google map"> <ui-gmap-marker ng-repeat="marker in markers" coords="marker.coords" options="marker.options" events="marker.events" idkey="marker.id"> <ui-gmap-window> <div>{{marker.window.title}}</div> </ui-gmap-window> </ui-gmap-marker> </ui-gmap-google-map> </div> </div> <div class="panel panel-default"> <div class="panel-heading"><span class="glyphicon glyphicon-remove marker"></span> Issues <span class="pull-right glyphicon glyphicon-remove closex"></span></div> <div class="panel-body">This page is temporarily disabled by the site administrator for some reason.<br> <a href="#">Click here</a> to enable the page. <p> What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p> </div> </div> </div> <div class="col-xs-12 col-md-6"> <div class="panel panel-default"> <div class="panel-heading panelsecond"><span class="glyphicon glyphicon-remove marker"></span> Recent Issues <span class="pull-right glyphicon glyphicon-remove closex"></span></div> <div class="panel-body"> <table datatable="ng" class="row-border hover"> <thead> <tr> <th>Country</th> <th>Issue</th> <th>Date</th> </tr> </thead> <tbody> <tr ng-repeat="issue in items.issues | filter:{ issu_status: 0 } | orderBy:orderProp" ng-if="$index < 3"> <td>{{ issue.country }}</td> <td>{{ issue.issu_des }}</td> <td>{{ issue.s_time }}</td> </tr> </tbody> </table> </div> </div> <div class="panel panel-default"> <div class="panel-heading"><span class="glyphicon glyphicon-remove marker"></span> Issues <span class="pull-right glyphicon glyphicon-remove closex"></span></div> <div class="panel-body">This page is temporarily disabled by the site administrator for some reason.<br> <a href="#">Click here</a> to enable the page. <p> What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p> </div> </div> </div> <div class="clearfix"></div> </section>')}]);