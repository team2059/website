---
date: 2015-10-16T14:56:04-04:00
title: Magnetic Limit Switches
resources:
  - Electical
aliases:
  - /magnetic-limit-switches
---

# Background and Requirements

 - The team experienced problems in the past with mechanical microswitches, used as limit switches. They tended to break at the worst possible time!
 - The team needed a robust new alternative design to eliminate the mechanical limitations of microswitches.
 - The new part needs to be small, rugged and easy to interface to roboRIO.
 - Must be affordable and reasonably easy to manufacture.
 
## Tools
 
 - Hacksaw
 - Dremel Tool with ball tip cutter 
 - Soldering iron & solder
 - Small wire cutters
 - Small needle nose pliers
 - X10 Eyeloop or magnifying glass
 - Small bench vice or holder of some sort
 - Small flat file
 - Round toothpicks
 
## Parts List
 
| Description                      | Source        | Part Number | Cost  | Parts / item |
| -------------------------------- | ------------- | ----------- | ----- | ------------ |
| Westinghouse 6”  Lamp nipples    | Home Depot    | 7060600     | $3.77 | 10           |
| Westinghouse Solid Brass Nuts    | Home Depot    | 7017200     | $2.77 | 12           |
| 3/8” x 3”  Nylon Hex Bolt        | Home Depot    | 17248       | $0.98 | 3            |
| Master Magnetic 3/4” Ceramic Mag | Home Depot    | 96244       | $1.98 | 8            |
| 1.0 kohm 1/4w 5% Resistor        | Jameco        | 690865      | $0.099 | 10          |
| 10 pF ceramic Capacitor          | Jameco        | 15333       | $0.09 | 10           |
| Optek OH180U Hall Effect Switch  | Jameco        | 1871879     | $2.95 | 1            |
| 30 awg wire wrap wire            | various       |             |       |              |
| Solder                           |               |             |       |              |
| Mylar tape                       |               |             |       |              |
| JB Weld                          |               |             |       |              |
| 3 position female PWM cable      |               |             |       |              |


## Cost per Device

| Description                      | Cost   | Cost per device | Notes        |
| -------------------------------- | ------ | --------------- | ------------ | 
| Lamp Nipples                     | $3.77  | $0.377          |              |
| Brass Nuts                       | $2.77  | $0.461          | 2 per device |
| Nylon bolt                       | $0.98  | $0.326          |              |
| Magnets                          | $1.98  | $0.248          |              |
| 1k Resistor                      | $0.099 | $0.0099         |              |
| 10pF Cap                         | $0.09  | $0.009          |              |
| OH180U Hall Effect Switch        | $2.95  | $2.95           |              |
| Misc – Tape, solder, epoxy       |        | $0.50           |              |
|                                  |        | **$4.88**       |              |

## Schematic

Here is the internal schematic 
![Magnetic Limit Switch Schematic](/images/2015/LIMIT_SWITCH_SCHEMATIC.jpg)

# Material Prep

 - Read everything before you start.  Believe me, it will help!
 - 6” nipples - housing
   - Cut to 1” lengths
   - File ends smooth
 - 3” nylon bolts - inserts
   - Turn down in lathe to fit in smoothly in housing. Not too snug, not too loose.
   - Cut to ¾” lengths
   - Cut 2 slots with hacksaw, 90° from each other down length of insert
   - Use ball tip in Dremel tool to cut out pocket in one of the slots to hold 1k ¼ watt resistor

# Assembly
 - Get ready to work SMALL!
 - Form resistor for connection to Hall Effect Switch
 - Mount resistor into insert – tape it in place.
 
 Solder 30 awg wire to top of resistor going to hall effect switch.
Solder resistor to hall effect switch
Try to solder as close to body of hall effect switch as possible.  Trim off excess. 
Note – insert was removed for clarity.  You must have the insert in place to solder on the Hall Effect Switch otherwise alignment will be off.

Trim insulation from 2 pieces of 30 awg wire.  Trim all excess wire but a nub and and bend 90°.  You only want to expose the wire that you solder.
Solder wires onto Hall Effect Switch and route down other slot in insert.
Pin 1 is left, Pin 2 is center, Pin 3 is right
Trim excess lead length from Hall Effect Switch after soldering.
Wrap with mylar tape and check for fit in housing

Here is what everything looks like without the insert and tape.  I’m showing this because the next pictures aren’t 100% clear.

Flip assembly over to begin working on bottom.  Wrap bottom with tape to hold everything in place
Solder wire from pin 3 to other end of resistor away from Hall Effect Switch.
Form leads of cap so the device will lay flat and the leads will stick straight up
Solder one leg of cap to resistor and wire from pin 3.
Solder wire from pin 2 to other leg of capacitor.
Route wire from pin 1 side of resistor up between legs of cap.

Trim leads.  Use a round toothpick to wedge insert in place.
Carefully trim and tin end of PWM cable.  Make sure the other end of the cable has a female header.
Solder as follows:
White – to resistor, cap, pin 3 junction
Red – to wire connected to pin 1
Black – to wire connected to pin 2

Almost done!
Check tape on top and bottom to make sure that it will cover all leads when insert is pushed into housing.
Check for fit.

Now we need to test before sealing everything up.
Red - connect to 9V battery +
Black - connect to 9V battery –
White - connect LED cathode
Bring South pole of magnet near Hall Effect Switch.  LED should turn on.
If not, check all connections and try again. 
9V battery was selected for convenience. 5V or 12V could be used just select new resistor.

Make a simple holding fixture to ease final assembly.
Position Hall Effect Switch just below end of housing.
Make sure nothing electrical is touching the housing one last time. Notice position of mylar tape in bottom right picture.
Mix up small batch (about the size of a pea) of JB weld and fill end of housing.  Use a toothpick to work out any bubbles or voids.  WORK QUICK!
If you get the JB Weld 15 minute epoxy, you have about 5 minutes before it begins to set up.  If you don’t have any voids, leave it alone.  It will self level and look really good.  If you have multiple sensors to finish, mix only enough to finish 2 at a time.  If you try more, it will start to set before you finish. I learned the hard way.

Once tops have set, flip everything over and JB weld the cable end.  You will need to work the epoxy in and around the wires.  Make sure you extend the epoxy up the wire for support.
Once the bottoms have dried, take a flat file and level off the top.  When you have it roughed in, use some fine grit sandpaper to finish.  The end should be smooth and flush with the end.  This one needs a second coat of JB Weld.
Use 2 of the hex nuts for mounting.

## Final notes
Depending on the strength of the magnet, 1/4” to 3/8” air gaps are normal.
We used these on our 2015 robot with zero problems.  Very robust and dependable.
Be patient.  This is small stuff and it takes time and a steady hand.
Pre-trim the kynar wire insulation before soldering the first connection.  Its tough to trim after you have made the first connection.
Invest in a good soldering station.  You can do it with a cheap one, but the investment will pay itself back in good quality solder connections and ease of use.  
If you have any questions, contact us at:  www.thehitchhikers.org  ref: mag pickups
