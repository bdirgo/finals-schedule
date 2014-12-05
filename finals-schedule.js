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
      Meteor.call("findFinal")
    },
    'click .day': function (event){
      Session.set("day", event.target.name);
      console.log(event.target.name)
      Meteor.call("findFinal")
    }
  });

  Tracker.autorun(function () {
    var time = Session.get("time");
    var day  = Session.get("day");

  });

  Template.hello.helpers({
    finalDay: function () {
      return Session.get("finalDay")
    },
    finalTime: function () {
      return Session.get("finalDay")
    }
  })
}






