!function(e){"use strict";window.eaelLoadMore=function(t,o){var s={totalPosts:t.totalPosts,loadMoreBtn:t.loadMoreBtn,postContainer:e(t.postContainer),postStyle:t.postStyle},n={postType:o.postType,perPage:o.perPage,postOrder:o.postOrder,orderBy:o.orderBy,showImage:o.showImage,showTitle:o.showTitle,showExcerpt:o.showExcerpt,showMeta:o.showMeta,imageSize:o.imageSize,metaPosition:o.metaPosition,excerptLength:o.excerptLength,btnText:o.btnText,tax_query:o.tax_query,post__in:o.post__in,excludePosts:o.exclude_posts,offset:parseInt(o.offset,10),grid_style:o.grid_style||"",hover_animation:o.hover_animation},r=n.offset+n.perPage;s.loadMoreBtn.on("click",function(t){t.preventDefault(),e(this).addClass("button--loading"),e(this).find("span").html("Loading..."),e.ajax({url:eaelPostGrid.ajaxurl,type:"post",data:{action:"load_more",post_style:s.postStyle,eael_show_image:n.showImage,image_size:n.imageSize,eael_show_title:n.showTitle,eael_show_meta:n.showMeta,meta_position:n.metaPosition,eael_show_excerpt:n.showExcerpt,eael_excerpt_length:n.excerptLength,post_type:n.postType,posts_per_page:n.perPage,offset:r,tax_query:n.tax_query,post__not_in:n.excludePosts,post__in:n.post__in,orderby:n.orderBy,order:n.postOrder,grid_style:n.grid_style,eael_post_block_hover_animation:n.hover_animation},beforeSend:function(){},success:function(t){var o=e(t);"grid"===s.postStyle?setTimeout(function(){s.postContainer.masonry(),s.postContainer.append(o).masonry("appended",o),s.postContainer.masonry({itemSelector:".eael-grid-post",percentPosition:!0,columnWidth:".eael-post-grid-column"})},100):s.postContainer.append(o),s.loadMoreBtn.removeClass("button--loading"),s.loadMoreBtn.find("span").html(n.btnText),r+=n.perPage,r>=s.totalPosts&&s.loadMoreBtn.remove()},error:function(){}})})},window.eaelDynamicGalleryLoadMore=function(t,o,s){var t={totalPosts:t.totalPosts,loadMoreBtn:t.loadMoreBtn,postStyle:t.postStyle,postContainer:t.postContainer,gridStyle:t.gridStyle,zoomIcon:t.zoomIcon,linkIcon:t.linkIcon,hoverStyle:t.hoverStyle,popUp:t.popUp,showPopupStyles:t.showPopupStyles},n={gallery:s,postType:o.postType,perPage:o.perPage,postOrder:o.postOrder,orderBy:o.orderBy,offset:o.offset,btnText:o.btn_text,tax_query:o.tax_query,exclude_posts:o.exclude_posts,post__in:o.post__in,postExcerpt:o.postExcerpt,btnText:o.btnText},r=o.offset+o.perPage;t.loadMoreBtn.on("click",function(o){o.preventDefault(),e(this).addClass("button--loading"),e(this).find("span").html("Loading..."),e.ajax({url:eaelPostGrid.ajaxurl,type:"post",data:{action:"load_more",post_type:n.postType,posts_per_page:n.perPage,post_style:t.postStyle,offset:r,tax_query:n.tax_query,post__not_in:n.excludePosts,post__in:n.post__in,orderby:n.orderBy,eael_fg_grid_style:t.gridStyle,eael_fg_grid_hover_style:t.hoverStyle,eael_fg_show_popup:t.popUp,eael_section_fg_zoom_icon:t.zoomIcon,eael_section_fg_link_icon:t.linkIcon,order:n.postOrder,eael_post_excerpt:n.postExcerpt,eael_fg_show_popup_styles:t.showPopupStyles},beforeSend:function(){},success:function(o){var s=e(o);setTimeout(function(){n.gallery.isotope("insert",s),t.loadMoreBtn.removeClass("button--loading"),t.loadMoreBtn.find("span").html(n.btnText)},100),r+=n.perPage,r>=t.totalPosts&&t.loadMoreBtn.remove()},error:function(){}})})}}(jQuery);