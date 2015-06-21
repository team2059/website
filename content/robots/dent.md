---
date: 2015-06-20T17:56:18-04:00
draft: true
title: Dent
year: 2014
game: Recycle Rush
image: "/2015/DENT_STACKING.jpg"
code: "https://github.com/team2059/Dent"
awards:
- title: Regional Winner
  event: 2015 North Carolina Regional
- title: Regional Finalist
  event: 2015 Palmetto Regional
---

Strategy
--------

The key to scoring points in Recycle Rush is to create stacks of totes with
Recycle Containers on top of each stack. A stack of totes without an RC on top
scores only 1/3 the points of a stack with an RC.

We decided to load from the landfill because the landfill is a preset size and
arrangement of totes that will not change from match to match, whereas the human
player station has to deal with human speed, getting lined up perfectly, falling
totes, etc. By loading from the landfill, you also are able to clear the field
for easier driving.

We also realized that in eliminations, robots will be able to work together on
an alliance, and that no robot will need to do everything on its own in order to
be successful. That was the leading factor in our decision to specialize in tote
stacking from the landfill.

Because during qualifications you do not know who you will be paired with,
however, you must assume that none of the robots can do anything, and thus you
must be able to do everything on your own. This was the leading factor in our
decision to build a rear elevator separate from the main elevator, specifically
designed to deal with RCs.

Once we made the decisions regarding our strategy for match play, we began the
process of prototyping ways to accomplish the set strategy.

Prototyping
-----------

Prototyping began very early on during week 1 of build season with both vague
CAD modeling, and physical prototypes. Our proof-of-concept prototype models are
designed to show us that an idea will work, but not necessarily that the exact
design prototyped should be the final version. We look at the flaws in the
prototypes and find ways to fix them.

The collector/intake system was designed originally with two long arms that
could clamp down around a tote to then pull it up our lexan surface ramp and
onto the inner platform of the robot. We found after testing, that the arms got
in the way more than they helped, especially when loading from the landfill, and
so we changed the design to be two simple spinning wheels at the top of the ramp
to center and pull the totes in, in addition to a different ramp with powered
rollers to go under the totes and pull them up into the robot.

The main elevator for totes was prototyped first with 4 individual bars that
bearings rode on, as well as a large carriage between them, but we found that
led to jamming and more friction that we wanted. We redesigned the carriage to
ride on a single vertical shaft, much like many elevators do, and then found it
to be far smoother.

We also designed 5 generations of tabs that lifted and held the totes on the
main elevator carriages. In the end, the final design we went with is identical
to the first design, but is slightly wider. Sometimes when you prototype, the
design comes back to the original idea.

The rear carriage designed changed to version 3, which is currently on the robot
and accommodates RCs far better, and allows for pickup of any game piece easier.
It also allows us to build stacks of 4, and then top them with 2 totes and an RC
to achieve the maximum stack of 6 totes with an RC on top.

By prototyping parts of the robot before we build the final version, we save
both time and money, and allow us to confirm that parts and designs will in fact
work on the final robot. This leads us to CAD, where we finalize dimensions,
locations, and how everything will fit together.

CAD
---

Once we have the strategy down, we begin building our prototypes of elements of
the robot in both CAD and physical parts. The CAD designs let us try things that
may take longer to actually build, or see if the part will actually fit where we
want it, or to give us an idea of how to space parts. Because of this, we end up
with a fully designed robot in CAD before the actual robot is complete.

After we had decided on general strategy and a vague way of accomplishing that
strategy, we created a very basic level CAD model in Autodesk Inventor of what
could be the robot design. There was little detail involved, and it merely
showed a proof of concept design, but it was enough to provide insight into the
next steps.

Because Autodesk provided teams with a fully generated FRC field in CAD, we were
able to put our robot on the field to see how it would fit in different
situations before making it to a competition. This allowed us to see more about
size restrictions, driving room, and how cluttered the field could become – and
how we could deal with it.

After we had decided on the final robot design, we made the final decisions in
CAD. This meant packaging the electronics, determining bolt hole locations,
final sizing of parts, supports, and more. We were then able to build the final
robot confident that the robot would go together as expected.

Intake
------

The intake design on our 2015 robot, Dent, is designed to quickly scoop under
totes in the landfill and pull them up and into the robot for stacking. The ramp
makes use of two powered rollers connected both with Gates belts and polycord to
pull the totes in and onto a platform within the robot, with another powered
roller.

Two 8inch pneumatic wheels on compress the sides of the tote as it comes up the
ramp and into the robot, centering the tote. They also allow us to come at a
tote from an angle, or even perpendicular to a tote, and still pull it into the
robot.

An ultrasonic sensor on the back lexan wall of the robot looks forward and
automatically slows the collector as the tote is pulled farther into the robot.
The sonar is also used in autonomous to detect whether a tote has been collected
fully or not.

All of these elements come together to form a reliable and fast intake system
for the landfill totes.

Main Carriage
-------------

The main carriage of our elevator is what lifts and stacks the totes internally
in our robot. It is designed to be able to stack a full 6 totes, but after
strategic analysis we determined that the best stack to aim for is a stack of
3-4 totes for our robot.

Each carriage rides on 12 bearings that glide along 1” angle pieces of aluminum
that act as the elevator shaft. The carriages then bolt to the #35 chain lift
with a custom made chain tensioner to ensure the chain never slips.

Lexan tabs snap down around the lips of the totes that are pulled in, and then
lift the stack back up. Using this passive system allows us to stack quickly
while not spending unnecessary weight on a part that could break – and
potentially ruin a match.

Along the vertical frame structure by the main elevator, there are 3 custom made
hall-effect sensors. The sensors recognize a magnet embedded within the elevator
carriage and allow the driver to raise or lower the carriage to a predetermined
height every time.

Rear Carriage
-------------

The rear carriage was designed specifically around being able to put a Recycle
Container on top of a stack of totes. During testing, we found that the
container is likely to be laying down during a match, and rather than spending
time trying to right it, we could just pick it up as it lay down.

We then tested using just an elevator where we went under the RC and then picked
it up, but found that that often resulted in us pushing the RC, not sliding
under it as we hoped. This led us to v3 where we can still slide under the RC
if we want, but we can also lower the carriage arms around the RC and they
passively lock back in place on the underside.

This design also works with totes, allowing us to top stacks of totes with
either RCs or totes and an RC. We are able to put an RC on top of stacks of 4
totes, or put an RC on a stack of 2 totes, and then lift that stack of 2 onto
another stack of 4 to achieve the stack of 6 totes with RC.

Two lexan tabs stick up vertically to keep the RC from rolling off the carriage
side. Lexan tabs on each side pivot and lock in place in the horizontal position
to pick up RCs. Two lexan hooks, one per side, also allow us to use the carriage
to pull RCs off of the step in teleop, making them accessible to our alliance to
score more points.

Electronics Packaging
---------------------

Designing a robot is a challenge, but getting the electronics to fit within the
robot – including the wiring – can often be even more challenging. CAD allows us
to layout the electronics and see how everything will fit together in 3D space,
rather than just 2D as with cardboard cutouts.

This year, we faced the challenge of fitting all of the electronics within the
chassis frame, underneath a platform. This meant the platform needed to be
easily removable for access to the battery.

We made use of the brand new Talon SRXs on the robot, and have 10 of them
powering the motors onboard. One AndyMark PG71 Gearmotor powers each elevator,
4CIMs work together to drive the 6” mecanum drivetrain, and 4BAG motors make use
of VersaPlanetary gearboxes from VexPro to run the collector and intake.

Scoring Ability
---------------

We designed our 2015 robot with the goal of stacking totes internally from the
landfill onto the scoring platform quickly. The rear elevator allows us to top
our own stacks if necessary, but also can be folded up out of the way during
matches that it is not needed for. We can score 3-4 stacks of 3-4 totes per
match, or slightly fewer stacks if we have to then top our own stacks during a
match. We also have 4 different autonomous sequences that can be run depending
on the match.
