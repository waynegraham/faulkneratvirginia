jQuery.fn.qtp=function(a,d,c,b){settings=jQuery.extend({base_url:"http://qss.itc.virginia.edu/medialab/faulkner_audio/",width:300,height:16,active_x:"",autoplay:false,scale:"tofit"},b);this.each(function(){var g=settings;var f=g.base_url+a;var e=QT_GenerateOBJECTText(f,g.width,g.height,g.active_x,"autoplay",g.autoplay,"scale",g.scale,"starttime",d,"endtime",c);$(this).append(e)});return this};