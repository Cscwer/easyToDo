angular.module("materialCalendar",["ngMaterial"]).service("Calendar",[function(){function t(t,e){var a=this,n=new Date;this.year=n.getFullYear(),this.month=n.getMonth(),this.dates=[],this.getNumDays=function(){return new Date(this.start.getYear(),this.start.getMonth()+1,0).getDate()},this.getFirstDayOfCalendar=function(t){var e=new Date(t||a.start);return e.setDate(1-e.getDay()),e},this.next=function(){11===this.month?(this.year++,this.month=0,this.init(this.year,this.month)):this.init(this.year,this.month+2)},this.prev=function(){this.month?this.init(this.year,this.month):this.init(this.year-1,12)},this.init=function(t,e){t&&e&&(this.year=t,this.month=e-1),this.start=new Date(this.year,this.month,1,0,0),this.dates=[],this.weeks=[[]],this.year=this.start.getFullYear(),this.month=this.start.getMonth();for(var a=0,n=this.getFirstDayOfCalendar(),i=1==n.getDate()&&28==this.getNumDays()?28:35,l=-6e4*n.getTimezoneOffset(),d=0;i>d;d++){var r=864e5*d+l,s=new Date(n.valueOf()+r);!s.getDay()&&this.weeks[0].length&&(a++,this.weeks.push([])),this.dates.push(s),this.weeks[a].push(s)}if(i>28){var o=this.weeks[4][6].getDate();if(29>o||o>30)return this.dates;this.weeks.push([]),a++;for(var d=35;42>d;d++){var r=864e5*d+l,s=new Date(n.valueOf()+r);this.dates.push(s),this.weeks[a].push(s)}}return this.dates},this.init(t,e)}return t}]).directive("mdCalendar",["Calendar",function(t){return{restrict:"E",replace:!0,template:'<section layout=column layout-fill=layout-fill flex=flex class=md-calendar><md-toolbar md-swipe-right=prev() md-swipe-left=next()><div layout=column class=md-toolbar-tools><md-button ng-click=prev() class=md-calendar-left-btn>&laquo;</md-button><h2 flex=flex class=md-calendar-title>{{ calendar.start | date:titleFormat }}</h2><md-button ng-click=next() class=md-calendar-right-btn>&raquo;</md-button></div></md-toolbar><h2 class="md-primary week md-calendar-title"><div layout=row layout-fill=layout-fill class=md-subheader-content><div flex=flex layout-align="center center" ng-repeat="day in calendar.weeks[0]" class=md-calendar-subheader>{{ day | date:dayOfWeekFormat }}</div></div></h2><md-content flex=flex layout=column layout-fill=layout-fill><div flex=flex layout=row layout-fill=layout-fill ng-repeat="week in calendar.weeks" class=md-calendar-month><div flex=flex layout=column layout-align="center center" ng-repeat="day in week" class=md-calendar-week><md-button ng-show="day.getMonth()===nowMonth" ng-click=handleDayClick(day) ng-class="{calendaractive:day.getDate() === daySelected}" data-year="{{ day | date:\'yyyy\' }}" data-month="{{ day | date:\'M\' }}" data-day="{{ day | date:\'d\' }}" class=md-calendar-day><div class=md-calendar-number>{{ day | date:dayFormat }}</div></md-button></div></div></md-content></section>',link:function(e,a,n){var i=parseInt(a.data("month")||(new Date).getMonth()+1),l=parseInt(a.data("year")||(new Date).getFullYear());e.titleFormat=a.data("title-format")||"MMMM yyyy",e.dayOfWeekFormat=a.data("day-of-week-format")||"EEE",e.dayFormat=a.data("day-format")||"d",e.calendar=new t(l,i),e.nowMonth=(new Date).getMonth(),e.daySelected=0,e.next=function(){e.daySelected=0,e.calendar.next(),e.nowMonth++,e.nowMonth>11&&(e.nowMonth=0);var t={year:e.calendar.year,month:e.calendar.month};e.$emit("md-calendar.month.next",t),e.$emit("md-calendar.month.change",t)},e.prev=function(){e.daySelected=0,e.calendar.prev(),e.nowMonth--,e.nowMonth<0&&(e.nowMonth=11);var t={year:e.calendar.year,month:e.calendar.month};e.$emit("md-calendar.month.prev",t),e.$emit("md-calendar.month.change",t)},e.handleDayClick=function(t){e.daySelected=t.getDate(),e.$emit("md-calendar.date.click",t);var a=n.ngClickDate||!1;a&&"function"==typeof e[a]&&e[a](t)}}}}]);