<script type='text/javascript'>
//<![CDATA[
// Multi Related Post
(function() {
  var jumlah = 4;
  var post = document.querySelectorAll('.post-body br, .post-body p');
  var a = jumlah + 1;
  var b = post.length / a;
  var c = Array.from({length: jumlah}, (redfx, blufx) => blufx + 1);
  for (var d = 0; d < c.length; d++) {
    var e = c[d];
    var f = parseInt((b * e));
    var g = document.createElement('div');
    g.className = 'gourabdesignmultiRelated';
    if (post[f]['nodeName'] == 'P') {
      post[f]['parentNode'].insertBefore(g, post[f]);
    } else {
      post[f]['parentNode'].insertBefore(g, post[f]['nextSibling']);
    }
  }
})();
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
function related_results_labels(nerdfx) {
  for (var desfx = 0; desfx < nerdfx.feed.entry.length; desfx++) {
    var nefx = nerdfx.feed.entry[desfx];
    relatedTitles[relatedTitlesNum] = nefx.title.$t;
    for (var ciafx = 0; ciafx < nefx.link.length; ciafx++) {
      if (nefx.link[ciafx].rel == 'alternate') {
        relatedUrls[relatedTitlesNum] = nefx.link[ciafx].href;
        relatedTitlesNum++;
        break;
      }
    }
  }
}
function removeRelatedDuplicates() {
  var viefx = new Array(0);
  var labfx = new Array(0);
  for (var desfx = 0; desfx < relatedUrls.length; desfx++) {
    if (!contains(viefx, relatedUrls[desfx])) {
      viefx.length += 1;
      viefx[viefx.length - 1] = relatedUrls[desfx];
      labfx.length += 1;
      labfx[labfx.length - 1] = relatedTitles[desfx];
    }
  }
  relatedTitles = labfx;
  relatedUrls = viefx;
}
function contains(yelfx, yufx) {
  for (var grefx = 0; grefx < yelfx.length; grefx++) {
    if (yelfx[grefx] == yufx) {
      return true;
    }
  }
  return false;
}
//]]>
</script>
  <b:if cond='data:post.labels'>
    <b:loop values='data:post.labels' var='label'>
      <b:if cond='data:view.isPost'>
        <script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=related_results_labels&amp;max-results=100&quot;'/>
      </b:if>
    </b:loop>
  </b:if>
<script type='text/javascript'>
//<![CDATA[
(function gourabdesignmultiRelated() {
var jumlah = document.querySelectorAll('.gourabdesignmultiRelated');
for (var i = 0; i < jumlah.length; i++) {
for (var j = 0; j < 3; j++) {
var r = Math.floor(Math.random() * relatedTitles.length);
jumlah[i].innerHTML += '<span class="multicontent"><span class="text"><ul class="ps-3 fw-bold"><li class="mb-2"><a href="' + relatedUrls[r] + '" title="' + relatedTitles[r] + '">' + relatedTitles[r] + '</a></li></ul></span></span>';
relatedTitles.splice(r, 1); // remove the used related title from array
relatedUrls.splice(r, 1); // remove the used related URL from array
}
}
})();
//]]>
</script>

