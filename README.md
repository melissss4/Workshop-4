# Workshop-4
workshop 4

As a starting point I used the code as shown in the workshop, once again I ran into the same problem as in the last workshop with getting my image file to work. 
![Screen Shot 2025-01-20 at 8 07 36 AM](https://github.com/user-attachments/assets/8413872d-28f9-469d-9d06-33ace6114ac8)


So I went to chat gpt to ask for help, to see if it could figure out what was wrong in more detail.
I used the prompt: “please analyse this javascript and make notes on why it is coming up with the following error message”
This did nothing, so I went to my friend who knows about coding to see if they could spot anything that I couldn’t. They realised that my image star1.jpg was misspelt as stars1.jpg. I quickly changed this and my code worked! 

I then wanted to try experimenting with a slider function that would change the transparency of each newly generated image after the slider function was used, so that you would be able to control the transparency of different layers of images produced from the pushed button.  At first I used the code provided in the workshop to create the slider, but when I used this in my code my button function stopped working. 

![Screen Shot 2025-01-20 at 10 40 38 PM](https://github.com/user-attachments/assets/c3d43b08-f683-4e40-a819-dc76ba0f43c5)


I then went to the p5.js library to find more advice. 
https://p5js.org/reference/p5/createSlider/ 

After looking through this and experimenting a bit with how to change the images to transparent (again I had to look at the p5 references) I was able to come to my final running code. 

Again, the issue I faced were some of my images being too large for the canvas so I experimented with making the canvas bigger (went from (400, 400) to (600, 600). I would like to find a way in the next workshop task to make the images themselves fit the canvas, instead of making the canvas fit the images. 


