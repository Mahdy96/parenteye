# parenteye

System Definition:

System that allows the parent to track his child on his way to the school.

System (two apps):

Child App

Parent App

Parent App
• Mobile app allows parent to register and add their child data. • Parent (email, password). • Child (name, age, residential address, school name and school address both addresses can be set on the map). • Parent can track where is his child and gets notifications when the child gets the school or home. • App requires authentication.

Child App
• Mobile app sends the current location of the child periodically. • It pushes notification when the child reaches the home or school. • Child can send notes to his parent. • App does not require authentication.

Test Scenario (Best case with two mobile devices):

Open Parent app (register then login).

Add his child data.

Open the child app to get the initial address before living home.

The Parent should get notification for example: “hey dad, I am leaving”. Then the parent should open the map and see where is his child.

The child app gets the current location of the child mobile every let’s say 3 minutes and update the child location in the database so the parent can see the new location on his map like (requesting Uber driver).

the child can send note to his parent for instance “the bus has been broken , I ‘ll keep moving in half an hour”

When the child gets the school, the parent gets a notification.
