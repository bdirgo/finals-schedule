if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("CHMNO", false);
  Session.setDefault("TIMEYES", false);
  

  Template.hello.helpers({
    
    CHMNO: function () {
      return Session.get("CHMNO");
    },

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
      { time: "1:50  PM", val: 11},
      { time: "2:20  PM", val: 12},
      { time: "3:00  PM", val: 13},
      { time: "4:00  PM", val: 14},
      { time: "4:10  PM", val: 15},
      { time: "4:30  PM", val: 16},
      { time: "5:00  PM", val: 17},
      { time: "5:30  PM", val: 18},
      { time: "6:00  PM", val: 19},
      { time: "6:30  PM", val: 20},
      { time: "7:00  PM", val: 21},
      { time: "7:30  PM", val: 22},
    ]
    
  });

  Template.hello.events({
    'click .NO': function () {
      // increment the counter when button is clicked
      
      Session.set("CHMNO", true);
    },
    'click button': function (event){
      console.log(event.target.name);
      
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
