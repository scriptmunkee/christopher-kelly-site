---
title: "I Asked Gemini for an AI SEO Consultant in Durham. It Didn't Mention Me."
description: "I built a tracker that asks Gemini who to hire as an AI SEO consultant in Durham. Twenty answers, no mention of me. Here's why, and what I'm changing."
standfirst: "I built a small tool that asks Google's Gemini the question I care about most, every week, and records exactly which pages it uses to answer. The first results were humbling. This is the story of how I built it, what it found, and why the problem probably applies to your business too."
category: Case Studies
pubDate: 2026-11-08
takeaways:
  - "Asked as someone in Durham, Gemini cited my site in 0 of 20 answers to 'AI SEO consultant in Durham'. One local agency's page was used in all 20."
  - "Gemini doesn't search your question word for word. It runs its own searches, such as 'SEO consultant Durham UK', and builds the answer from the pages those return."
  - "A page that doesn't rank for those searches can't be cited, however good it is. Mine wasn't in Google's top 30."
  - "Without a location, Gemini read 'Durham' as Durham, North Carolina. Tracking local questions means telling it where the person asking is."
  - "This started with Dan Petrovic's research at DEJAN into how Google builds the snippets Gemini answers from."
sources:
  - { title: "What extraction method is Google using to build grounding snippets?", publisher: "DEJAN (Dan Petrovic)", date: "24 February 2026", url: "https://dejan.ai/blog/what-extraction-method-is-google-using-to-build-grounding-snippets/" }
  - { title: "How big are Google's grounding chunks?", publisher: "DEJAN (Dan Petrovic)", date: "20 December 2025", url: "https://dejan.ai/blog/how-big-are-googles-grounding-chunks/" }
  - { title: "Revealed: The exact search result data sent to Google's AI", publisher: "DEJAN (Dan Petrovic)", date: "14 March 2025", url: "https://dejan.ai/blog/hacking-gemini/" }
  - { title: "AI features and your website", publisher: "Google Search Central", date: "Updated 10 December 2025", url: "https://developers.google.com/search/docs/appearance/ai-features" }
  - { title: "Grounding with Google Search", publisher: "Google AI for Developers", date: "Accessed 8 November 2026", url: "https://ai.google.dev/gemini-api/docs/google-search" }
authorLink: { text: "Enterprise AI SEO Consultant", href: "/" }
---

Sunday evening, 8 November.

I pressed a button on a dashboard I'd built that afternoon.

It asked Google's Gemini one question fifteen times, in three wordings: *AI SEO consultant in Durham*.

The first answer came back recommending a firm in North Carolina.

## It Started With Someone Else's Research

Most of what I know about how Gemini picks its sources, I learned from Dan Petrovic at DEJAN.

Dan has been taking Google's AI search apart in public since at least early 2025. His research shows that when Gemini searches the web, it isn't handed whole pages. It gets [short extracts from each page, picked to match the search it ran](https://dejan.ai/blog/what-extraction-method-is-google-using-to-build-grounding-snippets/), and it builds its answer from those. He [published the raw data Google sends to its AI](https://dejan.ai/blog/hacking-gemini/). He even measured how much text each answer gets: across 7,060 searches, [a median of 1,929 words per search, shared between the sources](https://dejan.ai/blog/how-big-are-googles-grounding-chunks/) (DEJAN's own dataset, December 2025).

Reading his work, I kept coming back to one question.

What happens when someone asks that for my business?

Not in theory. Every week, with a record I can look back on.

So I built something to find out.

## What I Built

It's a small private tool. Every Monday it asks Gemini the questions I choose, through the same Google Search connection Gemini uses to look things up, and saves everything that comes back.

| What it records | Why it matters |
|---|---|
| The searches Gemini ran | Gemini rewrites your question into its own searches before it looks anything up |
| Every page it used as a source | The pages an answer is built from are the ones that win |
| Which sentence each source supports | Shows whether you're the backbone of an answer or a footnote |
| Whether my site was cited | My page was one of the sources |
| Whether I was mentioned | My name appeared in the answer, cited or not |

Each question runs five times, because AI answers change from one run to the next. One answer is an anecdote. Five a week is a pattern.

I kept the question list short on purpose. One question matters most to me, so I track three ways of asking it:

- *AI SEO consultant in Durham*
- *Recommend an AI SEO consultant in Durham*
- *Who is the best AI SEO consultant in Durham?*

The whole thing runs on Cloudflare, and the searches sit well inside Google's free monthly allowance. It costs pennies a week.

## The First Answer Was About the Wrong Durham

That North Carolina answer wasn't a glitch.

When you ask Gemini through Google's developer connection, it doesn't know where you are. Gemini on your phone usually does. So when it saw "Durham" with no other clue, it picked the better-known one. It searched for *AI SEO consultant Durham NC* and recommended agencies in the Research Triangle.

The fix was simple. Every run now tells Gemini the person asking is in Durham, County Durham, England. The question itself stays word for word.

A real customer in Durham gets local answers because their phone knows where they are. My tracker now asks the same way.

## Then the Real Result Came In

Twenty answers, asked as someone in County Durham.

My site was cited in none of them.

My name wasn't mentioned in any of them either.

Meanwhile, one local agency's SEO services page was used in all 20. Four local firms appeared in at least 15. A review site listing Durham SEO agencies was used in 13.

And I have a page built for exactly this question. It's titled *AI SEO Consultant Durham*. It runs to nearly 1,800 words.

So why wasn't it anywhere?

## You Can't Be Cited If You Can't Be Found

The answer was in the searches.

Gemini never searched my exact question. In each answer it ran two to four searches of its own, such as *AI SEO consultant Durham UK*, *SEO consultant Durham County Durham AI* and *SEO agency Durham North East UK*. Google says as much: its AI features can [run several related searches across subtopics](https://developers.google.com/search/docs/appearance/ai-features) to build one answer.

Then it built its answer from whatever those searches returned.

So I checked where my page ranks. Searching *AI SEO consultant Durham* from Durham, it isn't in Google's top 30. A search of my own site didn't show it at all. It's a new page, and as far as I can tell, Google hasn't indexed it yet.

That's the whole story, really.

Gemini didn't read my page and decide against me. It never saw it.

## Now Ask the Same Question About Your Business

Walk through the same steps from your side.

Your next customer types a question into Gemini, ChatGPT or Google's AI Mode. It's probably vaguer than your keywords, something like *who's good for this near me*.

The AI doesn't answer from memory. It rewrites the question into its own searches. They're usually broader than the phrase you optimised for, and they lean on place names and plain service words.

It reads short extracts from the pages those searches return. Not your whole site. Not the page you think is your best.

Then it names two or three businesses. In my case, one competitor was in every single answer.

If your page isn't in those search results, you're not in the running. Your copy, your reviews and your schema don't get a look in.

## What Happened, and What It Means for You

| What happened | What it means for you |
|---|---|
| Gemini read "Durham" as North Carolina | AI fills in missing context with the most famous meaning. If your name or place is shared, say plainly which one you are |
| Gemini searched its own phrases, not my question | Find out what your AI answers actually search for. It's rarely your target keyword |
| My page wasn't in the top 30, so it was never used | AI visibility starts with ordinary indexing and rankings. No shortcut skips that step |
| One agency was in all 20 answers | AI answers concentrate on a few sources. Four firms took almost every slot; everyone else barely appeared |
| A review site was used in 13 of 20 | Lists and directories are a way in when your own page isn't |

## The Other Side

The fair objection: twenty answers on one evening isn't a study.

It's one question, through Google's developer connection, which isn't identical to Gemini on a phone or AI Mode in search. Answers move around. Next week could look different.

All true. That's why the tracker repeats every question and runs every week.

But one agency appearing in 20 answers out of 20 isn't noise. Nor is my page being missing from every one. When the pattern is that clean, I'd rather act now and let the weekly numbers tell me if I'm wrong.

## What I'm Doing Next

1. **Get the page indexed.** Request indexing in Search Console and check it's served. It's the first thing I look at in an [SEO and AI visibility audit](https://christopher-kelly.co.uk/services/seo-ai-visibility-audit/), and I'd skipped it on my own site.
2. **Rewrite the opening.** Dan's research suggests Google [takes the opening paragraphs of a page almost whole](https://dejan.ai/blog/what-extraction-method-is-google-using-to-build-grounding-snippets/). My page opened with a line about making AI recommend your business "not the one next door". It was a nice line, but it wasn't a fact. I've rewritten it so the first sentence says who I am, what I do and where I'm based.
3. **Match the searches Gemini actually runs.** The page now covers "SEO consultant", "SEO agency", "County Durham" and "North East", not just "AI SEO consultant".
4. **Get onto the lists Gemini reads, and keep measuring.** Being named on the review sites it used gets me into answers before my own page ranks. The tracker shows week by week whether it's working, which is the heart of [AI visibility measurement](https://christopher-kelly.co.uk/services/#ai-visibility-measurement).

If your locations go missing in the same way, the causes are often the ones I covered in [Why Your Branches Disappear From AI Answers, and How to Fix It](https://christopher-kelly.co.uk/blog/why-branches-disappear-from-ai-answers/).

## Credit Where It's Due

None of this would have occurred to me without DEJAN. If you want to understand how Google's AI chooses what to read, start with Dan Petrovic's work on [grounding snippets](https://dejan.ai/blog/what-extraction-method-is-google-using-to-build-grounding-snippets/) and [how big Google's grounding chunks are](https://dejan.ai/blog/how-big-are-googles-grounding-chunks/). I've simply pointed his ideas at one question that matters to me.

## The Short Version

AI can't recommend a page it never finds.

I built a tool to check, and the first person it caught out was me.

That's exactly why you check.
