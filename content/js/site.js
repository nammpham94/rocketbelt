(function () {
  'use strict';

  var clipboard = new Clipboard('.copy-code');

  clipboard.on('success', function(e) {
      e.clearSelection();
  });

  clipboard.on('error', function(e) {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
  });
})();
