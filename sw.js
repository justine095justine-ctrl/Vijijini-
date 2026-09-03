self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response(`
        <h1 style="text-align:center; font-family:sans-serif; padding:50px;">
        🚫 Hakuna Mtandao <br><br>
        VIJI inahitaji intaneti ili ifanye kazi. <br>
        Tafadhali washa data yako.
        </h1>
      `, {headers: {'Content-Type': 'text/html'}})
    })
  );
});
