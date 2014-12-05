if (Meteor.isClient) {

  Session.setDefault("time", 0);
  Session.setDefault("day", 0);
  Session.setDefault("finalDay", "");
  Session.setDefault("finalTime", "");


  Template.body.helpers({

    times: [
      
      { time: "8:00  AM", val: 1},
      { time: "9:10  AM", val: 2},
      { time: "9:35  AM", val: 3},
      { time: "10:20 AM", val: 4},
      { time: "11:10 AM", val: 5},
      { time: "11:30 AM", val: 6},
      { time: "12:40 PM", val: 7},
      { time: "12:45 PM", val: 8},
      { time: "1:00  PM", val: 9},
      { time: "1:50  PM", val: 10},
      { time: "2:20  PM", val: 11},
      { time: "3:00  PM", val: 12},
      { time: "4:00  PM", val: 13},
      { time: "4:10  PM", val: 14},
      { time: "4:30  PM", val: 15},
      { time: "5:00  PM", val: 16},
      { time: "5:30  PM", val: 17},
      { time: "6:00  PM", val: 18},
      { time: "6:30  PM", val: 19},
      { time: "7:00  PM", val: 20},
      { time: "7:30  PM", val: 21},
    ],

    daysOfWeek: [
      { day: "M  ", val: 100},
      { day: "T  ", val: 101},
      { day: "W  ", val: 102},
      { day: "TH ", val: 103},
      { day: "F  ", val: 104},
      { day: "S  ", val: 105},
      { day: "MW ", val: 106},
      { day: "MWF", val: 107},
      { day: "TTH", val: 108}
    ]
    
  });

  Template.body.events({
    'click .time': function (event){
      Session.set("time", event.target.name);
      console.log(event.target.name)
    },
    'click .day': function (event){
      Session.set("day", event.target.name);
      console.log(event.target.name)
    }
  });

  Tracker.autorun(function () {
    var time = Session.get("time");
    var day  = Session.get("day");
    if (time == 1 && day == 107) {
      Session.set("finalDay", "Monday")
      Session.set("finalTime", "7:30AM")
    } else if (time == 2) {
      Session.set("finalDay", "Wednesday")
      Session.set("finalTime", "7:30AM")
    } else if (time == 3) {
      Session.set("finalDay", "Tuesday")
      Session.set("finalTime", "10:00AM")
    } else if (time == 4) {
      Session.set("finalDay", "Monday")
      Session.set("finalTime", "10:00AM")
    } else if (time == 5) {
      Session.set("finalDay", "Thursday")
      Session.set("finalTime", "10:00AM")
    } else if (time == 6) {
      Session.set("finalDay", "Wednesday")
      Session.set("finalTime", "12:30AM")
    } else if (time == 7) {
      Session.set("finalDay", "Monday")
      Session.set("finalTime", "12:30AM")
    } else if (time == 9) {
      Session.set("finalDay", "Wednesday")
      Session.set("finalTime", "12:30AM")
    } else if (time == 10) {
      Session.set("finalDay", "Tuesday")
      Session.set("finalTime", "12:30AM")
    } else if (time == 12) {
      Session.set("finalDay", "Thursday")
      Session.set("finalTime", "12:30AM")
    } else if (time == 8 && (day == 106 || day == 104 || day == 105)) {
      Session.set("finalDay", "Monday")
      Session.set("finalTime", "12:30AM")
    } else if (time == 8 && day == 108) {
      Session.set("finalDay", "Tuesday")
      Session.set("finalTime", "12:30AM")
    } else if (time == 11 && (day == 106 || day == 104)) {
      Session.set("finalDay", "Wednesday")
      Session.set("finalTime", "12:30AM")
    } else if (time == 11 && day == 108) {
      Session.set("finalDay", "Thursday")
      Session.set("finalTime", "12:30AM")
    } else {
      Session.set("finalDay", "")
      Session.set("finalTime", "")
    }
  });

  Template.hello.helpers({
    finalDay: function () {
      return Session.get("finalDay")
    },
    finalTime: function () {
      return Session.get("finalTime")
    }
  })
}






