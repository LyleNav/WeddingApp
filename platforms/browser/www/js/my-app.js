var app = new Framework7({
    
      // App root element
      root: '#app',
      // App Name
      name: 'My App',
      // App id
      id: 'com.myapp.test',
      // Enable swipe panel
      panel: {
        swipe: 'left',
      },
      // Add default routes
      routes: [
        {
          path: '/about/',
          url: 'about.html',
        },
        {
          path: '/menu/',
          url: 'menu.html',
        },
        {
          path: '/bridegroom/',
          url: 'bridegroom.html',
        },
        {
<<<<<<< HEAD
          path: '/eventproper/',
          url: 'eventproper.html',
=======
          path: '/reception/',
          url: 'reception.html',
>>>>>>> c888b944b8f0eadcdc920a922f0b7032c9638567
        },
        {
          path: '/motif/',
          url: 'motif.html',
        },
        {
          path: '/location/',
          url: 'location.html',
        },
        {
          path: '/dinner/',
          url: 'dinner.html',
        },
      ],
      // ... other parameters
      theme:"auto"
    });
  
  var mainView = app.views.create('.view-main');
