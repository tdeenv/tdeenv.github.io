---
title: "Text Analysis: Analysing coffee reviews with R and Tableau"
collection: portfolio
---
Using R and Tableau I analyse qualitative reviews of beans to understand what experts are looking for in a good cup of coffee.

<img src="/images/portfolio-2/Coffee2.jpg" width="1000" height="300"> 

### Introduction 
(<a href="https://github.com/ThaherG/Coffee-review-analysis">R script</a>)


I found this data on <a href="https://www.kaggle.com/datasets/schmoyote/coffee-reviews-dataset">**Kaggle**</a>, where it was conveniently cleaned and uploaded after 
being scraped from www.coffeereview.com. It contains data on different beans, their country of origin, their price and three reviews by different experts. When starting this project I was interested in learning more about how experts analyse a cup of coffee and what they look for.

### Data cleaning
 To start with I decided to identify the common features experts mention by analysing their reviews. To make things simple, I chose to work with only the first column of reviews as I expected the other two columns to be similar in terms of word usage. I cleaned the data by removing the punctuation, numbers, symbols, stopwords and upper case letters using the following block of code:

```
#** Cleaning text.**
#Replacing "/", "@" and "|" with space
toSpace <-
  content_transformer(function (x , pattern)
    gsub(pattern, " ", x))
Text1 <- tm_map(Text1, toSpace, "/")
Text1 <- tm_map(Text1, toSpace, "@")
Text1 <- tm_map(Text1, toSpace, "\\|")
# Converting the text to lower case
Text1 <- tm_map(Text1, content_transformer(tolower))
# Removing numbers
Text1 <- tm_map(Text1, removeNumbers)
# Removing english stopwords
Text1 <- tm_map(Text1, removeWords, stopwords("english"))
# Removing punctuation
Text1 <- tm_map(Text1, removePunctuation)
# Removing extra white spaces
Text1 <- tm_map(Text1, stripWhitespace)
```

### Term-Document Matrix

A Term-Document Matrix (TDM) is a two-dimensional matrix which contains the frequency of terms in a particular document. I created using the aptly named termdocumentmatrix function as shown in the code below: 

```
Text1_dtm <- TermDocumentMatrix(Text1)
dtm_m <- as.matrix(Text1_dtm)
# Sorting by descending value of frequency
dtm_v <- sort(rowSums(dtm_m), decreasing = TRUE)
dtm_d <- data.frame(word = names(dtm_v), freq = dtm_v)
# Display the top 5 most frequent words
head(dtm_d,5)
```

The term document matrix produced the following output for the 5 most frequently used words:

<img src="/images/portfolio-2/term document matrix.JPG" width="250" height="150"> 

From context, we can assume that "cup" refers to the actual cup of coffee that experts are reviewing and therefore it can be ignored, leaving us with 4 features that
are considered important: "aroma", "finish", "structure" and "mouth feel". 

The word frequencies can also be visualised in a word cloud like below:
```
#** generating a word cloud**
set.seed(1234)
wordcloud(words = dtm_d$word, freq = dtm_d$freq, min.freq = 5,
          max.words=100, random.order=FALSE, rot.per=0.40, 
          colors=brewer.pal(8, "Dark2"))        
 ```

<img src="/images/portfolio-2/word cloud.png" width="400" height="300"> 

### Hypothesis testing
Are ratings and prices correlated? 
In the data, price refers to the cost of purchasing 100g of a specific coffee roast in $USD. As shown in the scatter plot (produced in Tableau desktop) and correlation test below, price and rating are positively correlated. 

<img src="/images/portfolio-2/price against rating" width="500" height="300"> 

<img src="/images/portfolio-2/corr.JPG" width="450" height="250"> 




###### Cover Photo by <a href="https://unsplash.com/@asthetik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mike Kenneally</a> on <a href="https://unsplash.com/photos/TD4DBagg2wE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
