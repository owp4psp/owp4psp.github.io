Songbird: By Nickdagamer

::Installation::

1)Connect your psp to your pc using a USB cable.
2)Drag the folder "songbird" onto the root of your memory stick. (where you see PSP, MP_ROOT, etc).
3)In the web browser of your PSP, type in "file:/songbird/index.html" (without qoutes).

And your done. 


::How to add songs::

1)Open "tracks.xml" in notepad. Do this by right-clicking on the file and then say open with > notepad.
2)::Note:: The song has to be a .mp3 and should be commpressed. Please refer to the other readme on how to compress songs.
3)Next, place the .mp3 in the folder "tracks".
4)Now in the "tracks.xml" document you opened, type in:

"<track source="location of song (mostly, file:/songbird/tracks/yoursong.mp3)" artist="artist name" album="album name" title="title of song" />"

in-between the codes: "<jukebox> and </jukebox>.

Basically, it should look like this:

<jukebox>
<track source="location of song (mostly, file:/songbird/tracks/yoursong.mp3)" artist="artist name" album="album name" title="title of song" />
</jukebox>

You can keep adding songs using the following method. You can add unlimited number of songs. 
