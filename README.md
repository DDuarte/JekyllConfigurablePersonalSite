Jekyll Configurable Personal Site
======================

[![Build Status](https://travis-ci.org/DDuarte/JekyllConfigurablePersonalSite.svg?branch=gh-pages)](https://travis-ci.org/DDuarte/JekyllConfigurablePersonalSite)

## Running
```bash
git clone https://github.com/DDuarte/JekyllConfigurablePersonalSite.git
cd JSONConfigurablePersonalSite
bundle install
bundle exec jekyll serve
```
the application will be running on http://localhost:4000

## Requirements

- **Ruby** at least version `2.0.0`
- **Bundler**: `gem install bundler`

This project has been made compatible with Github Pages as is. This means that you can fork this repository, edit `_config.yml` (see below) and have it hosted directly on Github.

See [Github Pages](https://help.github.com/articles/using-jekyll-with-pages/ "Using Jekyll with Pages") and [Jekyll](http://jekyllrb.com/ "Jekyll • Simple, blog-aware, static sites") sites for more information.

## Configuring your own site
To configure your own website after cloning this repo you will only need to work with one file:

### **_config.yml**
This file will be where you will put what I would consider required information to make your personal site as 'complete' as possible. 

Data stored in this file includes site title, site description, personal photograph (avatar), site background, description displayed on the home page, PDF link to your resume, list of shared links with icons, and list of projects along with the projects title.

#### icons
In **_config.yml** there is a section called **icons** that looks like the following:
```yml
icons:
  - icon: page
    link: resume.html
    title: Resume
  - icon: social-twitter
    link: https://twitter.com/OhMyCorgi
  - icon: paw
    link: http://lmgtfy.com/?q=corgi
```
In the code above we are specifying the icons that link to sites such as your Github, LinkedIn, Twitter, etc. along with an icon that will be used for the respective link. Each entry in the icons array requires an icon value and a link value. Optionally, you can provide a title for the link.

Icons and icon names are consistent with the [Foundation Icon Font](http://zurb.com/playground/foundation-icon-fonts-3#allicons) which can be found here: **[Foundation Icons](http://zurb.com/playground/foundation-icon-fonts-3#allicons)**. 

Links for our icons can either be relative links or absolute links.

#### projects
Projects are similar to icons except that they have different attributes, the following is an example of projects:
```yml
projects:
  - name: Jekyll Configurable Site
    link: https://github.com/DDuarte/JSONConfigurablePersonalSite
```
Projects require a name and a link. Optionally, you can provide a title for the link.

Project names are what will be shown on your website. Links just like icons can be either relative or absolute.


### links
These files is where you will specify links that will redirect when you go to certain paths in your site. By default the / path is your home page which will show your home page which will be populated with the info you have provided in your **_config.yml** file. 

`/resume` is also taken up by default, this path will grab your resume PDF that you specified under the *resumeFile* attribute in **_config.yml**.

To setup one of these links, create a file in the root directory named (e.g) `reddit.html` with the following content:
```yml
---
redirect_to:
  - https://www.reddit.com/r/corgi
---

```

You'll be able to go to `http://.../reddit` and it's going to be redirected to https://www.reddit.com/r/corgi.

This link will likely not work if you test it locally however it is supported by Github Pages. See [extensionless Jekyll permalinks](http://jekyllrb.com/docs/permalinks/#extensionless-permalinks).

## Miscellaneous
### **Favicon**
To update the site's favicon you will need to replace the **favicon.ico** file that is present in this directory (root). 

### **Images**
For images such as your avatar, site background, etc. you can either use a URL for an image that is served somewhere else online or use a relative path just the following
```yml
avatar: /img/avatar.jpg
background: /img/background.jpg
```
You can also go to */img* and replace the *avatar.jpg* and *background.jpg* files with the images you wish to use and leave the default URLs in place.

## Contribute
Have an idea to make this app better? Fork this repo and play around with it, make it better and if you think you have something worth sharing make a pull request. 


---


This project is based on [JSONConfigurablePersonalSite](https://github.com/christophior/JSONConfigurablePersonalSite "JSONConfigurablePersonalSite") written by [@christophior](https://github.com/christophior "Chris Villarreal") which has been adapted to Jekyll.
The original project uses Node.js, Dust.js and .json files for configuration.
