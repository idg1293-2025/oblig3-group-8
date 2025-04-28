[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Hl2JaK93)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=19289718)

## Project overview and purpose

## Points during brainstorming session
The main thing we wanted to achieve with this project was to either subvert expectations or put into perspective ones own biases and expectations related to the SDG goals. 

We went back and forth on the exact goal we wanted to tackle, we considered take into consideration goal 4, 1 and 10 by making a story showing how a normal student through university makes below the poverty line in terms of income especially if they have no other income than a summer job or weekend job. But found this difficult to implement in terms of an actual story.

Another idea was to takle the idea of a certain animal in an ecosystem one that we consider annoying or don't see the impact of as humans like seagulls for example and removing them entirely. 

Showing to characters debating the great changes to being able to go to the beach not getting bird poop on your car and eating ice cream and bread by the beach without worries. 

The way we would subvert is using this "utopian" worldview and show how they would imagine it then later showing the actual realities what would happen removing a vital animal from an ecosystem but we struggled to come with ideas for interactivity and it would be more of just as an aha to the user which might weaken the actual messaging of the vital importance of species in their various environments This would vary somewhere from goal 13 - 15. 
## Stack used
We didn't use any specific stack for the implementation of the project the only exception is the code and idea for the scrolling animation effect using the intersection observer API we have utilized the idea came from a Medium Article ***How to Implement Animation On Scroll with Vanilla JavaScript*** https://javascript.plainenglish.io/how-to-implement-animation-on-scroll-with-vanilla-javascript-655093a38059 
### Use of Animations interactions and observers
There are 3 separate observers for the website 
The first is the main observer used in the section tags that triggers once they intersect with about 30% of the container they remove the pre added class of hide with show triggering a transition animation adding opacity.