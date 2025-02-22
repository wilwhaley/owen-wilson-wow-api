[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/wilwhaley/owen-wilson-wow-api">
   <img src="https://images.ctfassets.net/bs8ntwkklfua/a8VZVlcGzNSojLjqqs0m5/9b46108b023fa929f40d6b261cb16c86/Transparent_Owen_Wilson.png" width="150" />
  </a>
   
  <h3 align="center">The "Modified" Owen Wilson "Bionic Wow" API</h3>

  <p align="center">
    A free JSON API for actor Owen Wilson's
    <br />
    'wow' exclamations in movies
    <br />
  </p>
   <p align="center">API Link: <a href="https://bionic-wow.herokuapp.com/">https://bionic-wow.herokuapp.com</a></p>
   <p align="center">Original API Documentation: <a href="https://wow.readme.io">https://wow.readme.io</a></p>
</p>

# Usage

## Random "Wow"

Retrieve a random "wow" in JSON format - [https://bionic-wow.herokuapp.com/wows/random](https://bionic-wow.herokuapp.com/wows/random)

<b>Example Response:</b>

```jsonc
[
  {
    "movie": "Marley & Me",
    "year": 2008,
    "release_date": "2008-12-25",
    "director": "David Frankel",
    "character": "John Grogan",
    "movie_duration": "01:55:32",
    "timestamp": "00:08:04",
    "full_line": "Wow. They really gave you a lot of space.",
    "current_wow_in_movie": 1,
    "total_wows_in_movie": 3,
    "poster": "https://images.ctfassets.net/bs8ntwkklfua/1k95TZRiTlZtAOpLjysOnF/69881667de3e849853ee1d4a9d3ab92e/Marley___Me_Poster.jpg",
    "video": {
      "1080p": "https://videos.ctfassets.net/bs8ntwkklfua/4nhhv7zq9vz1FpCchP4hOY/affe02a7b8d1b597c7ca60b45adaacc5/Marley___Me_Wow_1_1080p.mp4",
      "720p": "https://videos.ctfassets.net/bs8ntwkklfua/2ggG9a2f5bHhOCMTObD9kF/d7ffc47c4d3f148a24d0fd2c1a312c87/Marley___Me_Wow_1_720p.mp4",
      "480p": "https://videos.ctfassets.net/bs8ntwkklfua/1mX1xE5VgDpkQeTueSuZzX/41850f8b5b38aa76c3131c026fca387a/Marley___Me_Wow_1_480p.mp4",
      "360p": "https://videos.ctfassets.net/bs8ntwkklfua/2b6IvSW4MdXrBPheGa8faO/e9f893766d75c311c96d85ffbcd04faf/Marley___Me_Wow_1_360p.mp4"
    },
    "audio": "https://assets.ctfassets.net/bs8ntwkklfua/5UNHWK6YJrKFAXboH8rqGe/b071fc733b9647ada4a8cad7550a2e1b/Marley___Me_Wow_1.mp3",
    "movie_clip_size": 4177.83984375,
    "audio_clip_length": 1.776
  }
]
```
### Multiple Results

Retrieve a specific number of random "wow" results - [https://bionic-wow.herokuapp.com/wows/random?results=5](https://bionic-wow.herokuapp.com/wows/random?results=5)

<b>Example Response:</b>

```jsonc
[
  {
    "movie": "Cars 3",
    "year": 2017,
    "release_date": "2017-05-23",
    "director": "Brian Fee",
    "character": "Lighting McQueen",
    "movie_duration": "01:42:25",
    "timestamp": "00:26:11",
    "full_line": "Wow.",
    "current_wow_in_movie": 4,
    "total_wows_in_movie": 10,
    "poster": "https://images.ctfassets.net/bs8ntwkklfua/43fOBsgY8iOJL0dijvFnfl/ea361efc5131a859c173ab5dd3fdfe1e/Cars_3_Poster.jpg",
    "video": {
      "1080p": "https://videos.ctfassets.net/bs8ntwkklfua/7G6jLS5xfYBOepUxkW7R3c/c78d22f63ba51f371a1550834888b9ca/Cars_3_Wow_4_1080p.mp4",
      "720p": "https://videos.ctfassets.net/bs8ntwkklfua/lIhPcmNS5L4DnpY41EpUA/96b0c5b44acf3fe16e68d1e67156d41c/Cars_3_Wow_4_720p.mp4",
      "480p": "https://videos.ctfassets.net/bs8ntwkklfua/1h3am3BfJYUm0VXV4uKF9P/e75775ec0621889efd40ce1bc372735a/Cars_3_Wow_4_480p.mp4",
      "360p": "https://videos.ctfassets.net/bs8ntwkklfua/6eO8c3ojQA4rWMlE1hMMOa/c3a9ce4c01b2d342b33144c9f90b9e3e/Cars_3_Wow_4_360p.mp4"
    },
    "audio": "https://assets.ctfassets.net/bs8ntwkklfua/6aJuGg3bTjqd20j59vP1Wv/6cb60311194d3a9aa040882911a5f516/Cars_3_Wow_4.mp3",
    "movie_clip_size": 3290.5732421875,
    "audio_clip_length": 1.32
  },
  {
    "movie": "The Big Year",
    "year": 2011,
    "release_date": "2011-10-14",
    "director": "David Frankel",
    "character": "Kenny Bostick",
    "movie_duration": "01:43:09",
    "timestamp": "00:44:48",
    "full_line": "Wow!",
    "current_wow_in_movie": 1,
    "total_wows_in_movie": 3,
    "poster": "https://images.ctfassets.net/bs8ntwkklfua/pCjGOhbTCQVjLRN9zTwIi/ce7cdf4b40f3549326d881697aa468a1/The_Big_Year_Poster.jpg",
    "video": {
      "1080p": "https://videos.ctfassets.net/bs8ntwkklfua/2IZMW5Aeytz5rtu5MzcFk8/f675c3f6ef153c5df0c81679c80677d4/The_Big_Year_Wow_1_1080p.mp4",
      "720p": "https://videos.ctfassets.net/bs8ntwkklfua/2K0XjRiHYd8zbdYcmiTMH4/b2e4a9b02db184a4d4bd71fe15ab37a9/The_Big_Year_Wow_1_720p.mp4",
      "480p": "https://videos.ctfassets.net/bs8ntwkklfua/6QMkzBk6HrfuVxVT97mQg/5877904b163d7ccdc4baa92d449858d8/The_Big_Year_Wow_1_480p.mp4",
      "360p": "https://videos.ctfassets.net/bs8ntwkklfua/5SFeCoTmyTUEJYtK0kOO92/462afffbd6315182db59271f99a5a829/The_Big_Year_Wow_1_360p.mp4"
    },
    "audio": "https://assets.ctfassets.net/bs8ntwkklfua/45tt9xH4Uf3Rgt0EJtykZZ/b5cef0c5d09d368359f4a9c0e66a6663/The_Big_Year_Wow_1.mp3",
    "movie_clip_size": 3604.697265625,
    "audio_clip_length": 1.488
  }
]
```

### Specify year

Retrieve a random "wow" from a specific year - [https://bionic-wow.herokuapp.com/wows/random?year=2011](https://bionic-wow.herokuapp.com/wows/random?year=2011)

### Specify movie

Retrieve a random "wow" by the name of the movie it appears in - [https://bionic-wow.herokuapp.com/wows/random?movie=zoolander](https://bionic-wow.herokuapp.com/wows/random?movie=zoolander)

### Specify director

Retrieve a random "wow" from a movie with a particular director - [https://bionic-wow.herokuapp.com/wows/random?director=wes%20anderson](https://bionic-wow.herokuapp.com/wows/random?director=wes%20anderson)

### Specify movie occurrence number

Retrieve a random "wow" by the number of its occurrence in a movie - [https://bionic-wow.herokuapp.com/wows/random?wow_in_movie=2](https://bionic-wow.herokuapp.com/wows/random?wow_in_movie=2)

## Ordered "Wow"

Retrieve a specific "wow" by its index in the chronological order of all results - [https://bionic-wow.herokuapp.com/wows/ordered/0](
https://bionic-wow.herokuapp.com/wows/ordered/0)

### Multiple Ordered "Wow" Results

Retrieve all "wow" results between a first index and a second index, inclusive, in the chronological order of all results - [https://bionic-wow.herokuapp.com/wows/ordered/3-7](https://bionic-wow.herokuapp.com/wows/ordered/3-7)

## All Movies

Retrieve all names of movies in which Owen Wilson says "wow" - [https://bionic-wow.herokuapp.com/wows/movies](
https://bionic-wow.herokuapp.com/wows/movies)

## All Directors

Retrieve all directors of movies in which Owen Wilson says "wow" - [https://bionic-wow.herokuapp.com/wows/directors](
https://bionic-wow.herokuapp.com/wows/directors)

## All Audio

Retrieve all audio clips from movies in which Owen Wilson says "wow" - [https://bionic-wow.herokuapp.com/wows/audio](
https://bionic-wow.herokuapp.com/wows/audio)

## All Video

Retrieve all video clips from movies in which Owen Wilson says "wow" - [https://bionic-wow.herokuapp.com/wows/video](
https://bionic-wow.herokuapp.com/wows/video)


## Sorted Wows

Every endpoint supports sorting by either `movie`, `release_date`, `year`, `director`, `number_current_wow`, `movie_clip_size`, and `audio_clip_length`. Sort direction can be either `asc` (ascending) or `desc` (descending) -

[wows/random?results=3&sort=movie&direction=desc](https://bionic-wow.herokuapp.com/wows/random?results=3&sort=movie&direction=desc)

[wows/video?sort=movie&direction=desc](https://bionic-wow.herokuapp.com/wows/video?sort=movie&direction=desc])

[wows/audio?sort=audio_clip_length&direction=asc](https://bionic-wow.herokuapp.com/wows/audio?sort=audio_clip_length&direction=asc])

[wows/video?sort=video_clip_length&direction=desc](https://bionic-wow.herokuapp.com/wows/video?sort=video_clip_length&direction=desc])

[wows/ordered/3-7?sort=movie&direction=asc](https://bionic-wow.herokuapp.com/wows/ordered/3-7?sort=movie&direction=asc)

# CLI

The bionic-wow app comes with two python scripts which live in the scripts/ directory.

### play_wow

Use the unix `play` command to play a random audio clip normally and then with an adjusted pitch.

### update_wows

Add the movie_clip_size and audio_clip_length to the standard json data for each 'wow'.

### These scripts assume the following tools have been installed:
1. [sox](https://www.unixmen.com/how-to-play-music-from-command-line-terminal/)
2. [python3.9](https://linuxize.com/post/how-to-install-python-3-9-on-ubuntu-20-04/)


<!-- LICENSE -->
# License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
# Contact

Wil Whaley - wilwhaley@gmail.com

Bionic API Link: [https://bionic-wow.herokuapp.com/](https://bionic-wow.herokuapp.com/)

Original API Link: [https://owen-wilson-wow-api.herokuapp.com/](https://owen-wilson-wow-api.herokuapp.com/)

Original API Documentation: [https://wow.readme.io](https://wow.readme.io)

# Disclaimer

The Owen Wilson Wow API is not affiliated, associated, authorized, endorsed by, or in any way officially connected with Owen Wilson, or any of his subsidiaries or affiliates. All motion pictures, products, and brands mentioned on this website are the respective trademarks and copyrights of their owners.

# Disclaimer 2
This is a modified version of the excellent owen-wilson-wow-api.

<!-- ACKNOWLEDGEMENTS -->
# Acknowledgements
* [Owen Wilson](https://en.wikipedia.org/wiki/Owen_Wilson)
* [Owenergy YouTube Channel](https://www.youtube.com/watch?v=dn5Tattkj_E)
* [Screenrant.com](https://screenrant.com/owen-wilson-movies-say-wow-how-many/)
* [TMDB](https://www.themoviedb.org/)
* [Contentful](https://www.contentful.com/)
* [ezgif.com](https://ezgif.com/resize-video)
* Homepage design inspired by [chucknorris.io](https://api.chucknorris.io/)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [ReadMe](https://readme.com)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/wilwhaley/owen-wilson-wow-api/blob/main/LICENSE.txt
