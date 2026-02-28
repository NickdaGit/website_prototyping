Firstly a number of small cosmetic adjustments to the monkey magic website.

Logo size and position on mobile:
The company logo in the top left is too large and intrusive when viewed on mobile devices. 
The desktop version looks great so that should remain as is. 
Please adjust so that is is smaller and further in the top left corner when viewed on mobile.
It should be about two thirds of its current size. It should be a bit closer to the top and a lot closer to the left edge.
For the left spacing, the gap from icon to left edge should be about one third of current.

About sections text adjustment:
Replace the "Who we are and what we do" text from under the About card on the name page with "Monkey Magic AI" in the same font and size.
Make the same text adjustment on the actual About webpage.


Now to add some new sections to expand the website.

Building a library of jokes:
Start a "library" of jokes. There will be a number of categories of jokes. It will be limited to 10 jokes per category for now. 
All the jokes should be stored in a folder structure under the existing fun subdirectory.
The filename and folder structure should allow for expansion of the library at a latter date.
Each joke should be in its own .md file with YAML frontmatter info to help navigate the library as it expands.
The YAML frontmatter should be of consistent structure across the joke library so that it is easily searchable by an agent or script.
It should contain the category of joke, subject matter, any tags that are useful for retrieval. Author, date and anything else that you believe is useful.
For the purposes of building out the library of jokes only, the author can be "Nicholas". 
Write a context .md file in the jokes folder that can be used by you at a later date if context is lost or you are refreshing your context window.
This jokes library context file should provide you with understand of the structures and approach you are using, the goals, progress.
Also write a jokes library suggestions file in .md format. This should contain any known to do tasks directly related to the jokes library and include up to 5 suggestions for next steps.  

Vision for the Jokes library:
The overall vision of the fun section is to be some good and fun that visitor stay on-site longer and want to come back in the future. 
The jokes library is the repository of joke material that will serve as a resource to the Jokes of the Day section under the Fun section on the website.
 , and categorizing by style makes it way more usable than a flat list.
Here are the categories for the library:
* Quick Hits (one-liners, punchy, instant gratification—like “Why don’t skeletons fight? Because they don’t have the guts.”)
* Dad Jokes (cheesy, groan-worthy, family-safe—think puns on everyday stuff: “I told my wife she was drawing her eyebrows too high. She looked surprised.”)
* Story Jokes (longer setups with a twist—classic like the priest, rabbi, and bartender walking into a bar)
* Tech & AI Jokes (niche for your crowd: “Why did the AI go to therapy? It had too many unresolved dependencies.”)
* Monkey Magic Specials (your brand’s flavor—banana puns, AI-monkey mashups: “Why did the monkey use AI? To go bananas faster.”)
* Dark Humor (edgy, but opt-in—label it clearly so no one gets surprised: “I asked my therapist if I’m a narcissist. She said ‘no, but your reflection thinks you’re amazing.’”)
* Absurd / Surreal (weird, no-logic stuff—like Monty Python vibes: “A man walks into a bar… and becomes a duck. The end.”)


Vision for the Wisdom library:
This Wisdom section is similar to the Jokes library but instead contains "wisdoms". Same vibe, but for wisdom. 
The library should be built up under the same structure but in the wisdoms subfolder instead of the jokes folder.
For the purposes of building out the library of jokes only, the author can be "Gunther". 
Quotes of the day (real or made-up) are gold for that “hmm, that’s kinda deep” hit—especially if they’re short, punchy, and mix thought with wit.
Here are the categories:
* Life Hacks (practical, bite-sized advice—like “Don’t wait for inspiration—start messy, clean later.”)
* Tech Wisdom (AI-era stuff: “The best code isn’t the fastest; it’s the kind you still understand next year.”)
* Monkey Magic Moments (your brand’s spin—cheeky + insightful: “A banana a day keeps the bugs away… unless you’re debugging.”)
* Quiet Truths (calm, reflective: “Most problems solve themselves if you stop talking and start listening.”)
* Witty One-Liners (sharp, smile-worthy: “Success is 1% talent, 99% pretending you know what you’re doing.”)
* Big Picture (philosophical but not preachy: “The universe doesn’t owe you answers—just better questions.”)

Please include the example jokes and wisdoms that I included above in the respective libraries of jokes and wisdoms we are building up.  

Expanding the fun landing page:
This page no longer needs to be "Under construction" as we will now add three interactive cards below the hero banner:
1. Jokes of the day
2. Wisdom of the day
3. Proof of concepts

Joke of the Day:
Build this new page under /fun.

Wisdom of the Day:
Build this new page under /fun.


"Proof of concepts" is a new page that you will need to create. For now it can simply be "Under construction" but this will be where we can try new ideas out and experiment without disrupting the other sections of the website.
It can have its own subfolder called "poc" to ringfence anything we are experimenting with. So poc.html under the subfolder of poc.

How to style and present the Daily pick from the underlying .md libraries of jokes and wisdoms?: 
Both the Jokes and Wisdom of the day pages should have the same look and feel.
The goal is to present a daily selection of three jokes from "library' in an attractive and fun interactive way. 
This should be true for desktop and mobile but the way it works on mobile can be different if the result is a better user experience.
I am not familiar with all the methods and options that are available to achieve this so just go with a good option and we can adjust later if necessary.
Lists are obviously not an option as they are not fun or iterative.

NOTE: I'm aware that there are other existing things under the /fun folder. The plan is to fix and incorporate those things to the fun section of the website at a later date.

Processing this request:
Instead of writing or updating the changes_made.md file like you have done for previous changes, from now on, add a similar file per change request under the change_requests folder. 
Use a naming convention that ties it to the specific change request.
This is the first time we are using this approach so this is the first request, hence 001. We can amend the convention once we get to 999.  

Plan this work before executing and check for approval before proceeding with making the actual changes.
