# Term project outline

This document contains instructions and guidelines for carrying out your final term project. Use it as an opportunity to explore what interests you, within the constraints outlined below:

## Proposal

You must **submit a 200-300 word proposal** that describes what project type and topic you plan on exploring, and where you intend to source your data from (if applicable). It should be written up in a markdown file containing relevant formatting and any relevant references, links, media and attachments.

## Project: Choose your adventure

### :bulb: Researcher

Choose this if you have a keen and critical curiosity for the social and environmental processes around you, you don't mind exploring data through commands, and you like the prospect of doing research/investigations that are precise, reproducible and free of untraceable human error (i.e. using computational research techniques, some of which have been or will be seen in this class). You like data engineering, analysis and visualization, and would like to explore it some more.

- Deliverable: A computational essay that carries the reader through an analysis by mixing prose, code, and computational results. The essay and related materials (input data, etc.) are to be published in a Github repository that can be set to either public or private. The guidelines and constraints are as follows:
  -	The choice of topic is up to you.
  -	Your study area should be limited to or somewhere within the island of Montreal. If you would prefer a different study area, please verify with an instructor in order to ensure data availability.
  -	Minimum 750, maximum 1000 words (excluding bibliography) in English or French.
  -	You must cite at least 3 papers related to the topic you have chosen. At least one of these papers must specifically relate to methodologies that can inform your work.
  -	Depending on your strengths, you can engage with your data through the lens of exploratory data analysis (i.e. using mostly visualization and descriptive summary statistics), or - if you are more statistically inclined - delve deeper by engaging with more advanced quantitative research methods (clustering, etc. using spatial statistics methods made available by libraries such as PySal, or more generic libraries like scipy, machine-learning algorithms provided by scikit-learn, or nltk for those interested in text data, etc.).
  -	The data you use is up to you. You can use the population data seen in this class, but if you do so, you **must join at least one other field** of information to it for integration into your analysis (recall the census analyzer explored in class). You may also integrate another data set, in addition to the population data.
  - Your code notebook must be published online in an interactive session using [NBViewer](https://nbviewer.org/), [MyBinder](https://mybinder.org/), [Voilà](https://voila-gallery.org/) \[[1](https://voila.readthedocs.io/en/stable/using.html), [2](https://voila.readthedocs.io/en/stable/deploy.html#deployment-on-binder)\], or [Streamlit](https://streamlit.io/cloud). This is so that readers can interactively engage with your code and thought process.
  - Your code notebook must be accompanied by a README.md file that *briefly* introduces your project and points the reader to how to engage with your code notebook material (how to download/deploy, how to run).

### :wrench: Python Programmer

Choose this path if you are excited by tool building and the prospect of sharing ready-made functionality with your future self and others, if you enjoy programming, if you are repelled by redundancy and love making things efficient, modular and useful, if you understand (or plan on understanding) functions well and if you can write articulate and efficient technical documentation and instructions that are accessible to a wide audience.

- Deliverable: A library of GIS and mapping tools with attached documentation. Guidelines and constraints are as follows:
  - Your tasks involve creating a series of tools which you can easily source from for performing data wrangling, GIS, visualization and geospatial data exploration tasks.
  - Your library must be coherent, and make sense as a package (i.e. do not simply cobble together random functions). 
  - Your code must be accessible via function calls and organized inside a module or series of modules.
  -	You must create at minimum 10 separate functions that do not depend on each other (obviously you can have as many dependent or nested functions as you like). You cannot simply package existing methods (e.g. a pandas method) inside your own function and call it a day.
  - Your functions must be clear about what kind of data they require as inputs. They should be able to accomodate a wide range of input scenarios, and contain proper error handling where relevant.
  - At least one of your functions must be a useful geovisualization function. If generating static maps, they must have with all necessary map elements (auto-generated titles, scalebar, etc.). Your viz function must be able to receive geodata of any extent or scale, not just Montreal (for example). It is especially encouraged that you explore adding functionality that can accomodate custom zoom levels, etc.
  -	You must demonstrate relevant use of for loops, conditional statements, positional and keyword arguments, etc.
  -	Your scripts must be published as a public Github repository that contains a README.md file utilizing relevant markdown notation explaining, in sufficient detail and using accessible language (English, or multilingual), how to set up and use your code, each function and its required and/or optional parameters (positional, keyword arguments), with links to any relevant external documentation. You may use Github’s Wiki feature if you think the documentation required is complex enough/requires organization into separate pages, but this is not necessary in most cases. You should also fill out all relevant repository fields to make your code as accessible as possible (tags, *about* panel, etc.)

### :mag_right: Data Curator

Choose this path if you are excited about open data, you are organized and archival, you are investigative, logically consistent, and you like the thought of publishing a public data repository that could be of use to researchers, journalists, students and other engaged citizens.
- Deliverable: a repository containing a collection of spatial data layers containing all relevant metadata and previewed in an interactive atlas. The following conditions apply:
  - You can choose one of the following to delimit your data investigation:
    - A **single area** (*excluding* the island of Montreal) to collect minimum 10 different geodata layers on. The reason for which you are collecting data for a given area must be justified (i.e. you must demonstrate that there is not already a data portal or source that aggregates such data in such a way). Consider areas (administrative units or areas of interest) for which intel is sparse.
    - A **single theme**. In this scenario, the goal is to construct a coherent database that covers a large extent or series of related extents (i.e. all major cities in X country). In this scenario, the goal will likely involve data concatenation (combining datasets to create a new dataset or series of datasets that are internally consistent). Like the first option, you must demonstrate that such a dataset does not already exist or is not publicly available.
  -	Note that the value added in this project scenario could involve wrangling a dataset to make it usable (applying a relevant classification scheme, etc.)
  -	Your data could be raster, vector, classified satellite imagery, georeferenced data tables, etc. It must be geographic data that is published in an immediately usable form. Your public should be able to easily use your data and know what to expect from it.
  -	If you needed to process data you found in any way, you must demonstrate you did this by sharing your code, either from inside a Python notebook or in Python scripts. While your public may not run this code, it provides a form of data lineage/documentation for what was done to it. It can also be useful in cases where such datasets need to be processed again (e.g. when new versions are published). Your code must work, and be organized and documented.
  -	You must publish a metadata file for each data set/layer. This metadata must be a visible part of your web atlas. Your metadata should include at least the following wherever applicable:
    -	*summary/description; spatial data type; source/source url(s); date collected; date published; an explanation of each attribute; extent; spatial resolution; coordinate system; projection (if projected); use limitations/license.*
  -	Your data should be published in a Github repository that contains a README.md file utilizing relevant markdown notation *briefly* explaining the premise of your data curation project, a rationale for why it is necessary, a description of the data contained, etc.
  - Your website should be published and available publicly online. There are many ways of doing this: You could host it in an *index.html* file in your repository, (which should then be [published as a Github Page](https://geog-464.github.io/resources/github-page-howto.html)); or it could be hosted in a Jupyter notebook and published using one of the tools described under *Researcher*.

## Grading

- Proposal (5%). submitted via your `term-project` repository by **March 8, 2023 at 14:45**
- Project (95%), link to your own personal, public repository or webpage submitted via Moodle by **April 14** at end of day. consider the following baseline criteria:
  - Your code should run without error.
  - It should produce the intended output.
  - There should be documentation that explains its logic.
  - The documentation should be properly formatted.
  - Your code should reflect what was taught to you in this course.
  - Your written work should be of publishable quality.
