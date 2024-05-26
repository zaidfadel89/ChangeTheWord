/*! For license information please see main.3e930169.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{140:function(e,t,a){},219:function(e,t,a){},281:function(e,t,a){e.exports=a(767)},303:function(e,t,a){},546:function(e,t,a){},547:function(e,t,a){e.exports=a.p+"static/media/lognav.76ffe871.png"},548:function(e,t,a){},748:function(e,t,a){e.exports=a.p+"static/media/chi.8d5810fc.jpg"},749:function(e,t,a){e.exports=a.p+"static/media/Rent.7b7b9591.png"},750:function(e,t,a){e.exports=a.p+"static/media/Sell.3578f0d8.png"},751:function(e,t,a){e.exports=a.p+"static/media/Buy.e0ba28fa.png"},752:function(e,t,a){e.exports=a.p+"static/media/Footer-City.aadd3819.png"},753:function(e,t,a){},754:function(e,t,a){},764:function(e,t,a){e.exports=a.p+"static/media/Footer-City.aadd3819.png"},767:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(94),l=a.n(r),o=a(3),i=a(4),c=a(19),m=a(6),u=a(5),h=a(20),p=a.n(h),d=a(26),g=a(7),f=a(29),b=(a(303),a(275)),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",password_confirmation:"",firstName:"",lastName:"",age:"",email:"",phone:"",redirectTo:null,errors:{}},e.handleChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log("sign-up handleSubmit, username: "),console.log(e.state.username);var a={username:e.state.username,password:e.state.password,password_confirmation:e.state.password_confirmation,age:e.state.age,firstName:e.state.firstName,lastName:e.state.lastName};console.log(a);Object(b.validateAll)(a,{username:"required|alpha_numeric",password:"required|string|min:6",password_confirmation:"same:password",firstName:"required|string",lastName:"required|string",age:"required|above:17"},{required:"{{ field }} is required.","password_confirmation.required":"Enter the same password"}).then((function(){p.a.post("/user/",{username:e.state.username,password:e.state.password,firstName:e.state.firstName,lastName:e.state.lastName,age:e.state.age,email:e.state.email,phone:e.state.phone}).then((function(t){console.log(t),t.data.messages?console.log("username already taken"):e.setState({redirectTo:"/login"})})).catch((function(e){console.log("signup error: "),console.log(e)})),console.log("success")})).catch((function(t){console.log(t),console.log(e.state);var a={};t.forEach((function(e){return a[e.field]=e.message})),e.setState({errors:a}),console.log(e.state)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return this.state.redirectTo?s.a.createElement(g.a,{to:{pathname:this.state.redirectTo}}):s.a.createElement("div",{className:"wrapper"},s.a.createElement("form",{className:"form-inline"},s.a.createElement("div",{className:"form-wrapper"},s.a.createElement("h4",{className:"signUp"},"Sign up"),s.a.createElement("label",{className:"form-label",htmlFor:"username"},"Username"),s.a.createElement("input",{className:"form-input",type:"text",id:"username",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChange}),s.a.createElement("div",{className:"err-msg"},this.state.errors!=={}?s.a.createElement("span",null,this.state.errors.username):null),s.a.createElement("label",{className:"form-label",htmlFor:"password"},"Password "),s.a.createElement("input",{className:"form-input",placeholder:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),s.a.createElement("div",{className:"err-msg"},this.state.errors!=={}?s.a.createElement("span",null,this.state.errors.password):null),s.a.createElement("label",{className:"form-label",htmlFor:"password"},"Confirm "),s.a.createElement("input",{className:"form-input",placeholder:"Confirm Password",type:"password",name:"password_confirmation",value:this.state.password_confirmation,onChange:this.handleChange}),s.a.createElement("div",{className:"err-msg"},this.state.errors!=={}?s.a.createElement("span",null,this.state.errors.password_confirmation):null),s.a.createElement("label",{className:"form-label",htmlFor:"username"},"First Name"),s.a.createElement("input",{className:"form-input",type:"text",id:"firstName",name:"firstName",placeholder:"First Name",value:this.state.firstName,onChange:this.handleChange}),s.a.createElement("div",{className:"err-msg"},this.state.errors!=={}?s.a.createElement("span",null,this.state.errors.firstName):null),s.a.createElement("label",{className:"form-label",htmlFor:"username"},"Last Name"),s.a.createElement("input",{className:"form-input",type:"text",id:"lastName",name:"lastName",placeholder:"Last Name",value:this.state.lastName,onChange:this.handleChange}),s.a.createElement("div",{className:"err-msg"},this.state.errors!=={}?s.a.createElement("span",null,this.state.errors.lastName):null),s.a.createElement("label",{className:"form-label",htmlFor:"username"},"Age"),s.a.createElement("input",{className:"form-input",type:"number",id:"age",name:"age",placeholder:"Type your age",value:this.state.age,onChange:this.handleChange}),s.a.createElement("div",{className:"err-msg"},this.state.errors!=={}?s.a.createElement("span",null,this.state.errors.age):null),s.a.createElement("label",{className:"form-label",htmlFor:"username"},"Email"),s.a.createElement("input",{className:"form-input",type:"text",id:"email",name:"email",placeholder:"Email (optional)",value:this.state.email,onChange:this.handleChange}),s.a.createElement("label",{className:"form-label",htmlFor:"username"},"Phone"),s.a.createElement("input",{className:"form-input",type:"number",id:"phone",name:"phone",placeholder:"Phone (optional)",value:this.state.phone,onChange:this.handleChange}),s.a.createElement("button",{className:"btn-btn-1",onClick:this.handleSubmit,type:"submit"},"Sign up"))))}}]),a}(n.Component),v=(a(546),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={username:"",password:"",redirectTo:null},e.handleSubmit=e.handleSubmit.bind(Object(c.a)(e)),e.handleChange=e.handleChange.bind(Object(c.a)(e)),e}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log("handleSubmit"),p.a.post("/user/login",{username:this.state.username,password:this.state.password}).then((function(e){console.log("login response: "),console.log(e),console.log(e.status),200===e.status&&(t.props.updateUser({loggedIn:!0,username:e.data.username,firstName:e.data.firstName}),t.setState({redirectTo:"/"}))})).catch((function(e){console.log("login error: "),console.log(e)}))}},{key:"render",value:function(){return this.state.redirectTo?s.a.createElement(g.a,{to:{pathname:this.state.redirectTo}}):s.a.createElement("div",{className:"wrapperl"},s.a.createElement("br",null),s.a.createElement("h4",{className:"login-1"},"Login"),s.a.createElement("form",null,s.a.createElement("div",{className:"form-wrapperl"},s.a.createElement("label",{className:"form-labell",htmlFor:"username"},"Username"),s.a.createElement("input",{className:"form-inputl",type:"text",id:"username",name:"username",placeholder:"Username",value:this.state.username,onChange:this.handleChange}),s.a.createElement("label",{className:"form-labell",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"form-inputl",placeholder:"Password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),s.a.createElement("button",{className:"btn-btn-btn",onClick:this.handleSubmit,type:"submit"},"Login"))))}}]),a}(n.Component)),y=(a(219),function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).logout=e.logout.bind(Object(c.a)(e)),e}return Object(i.a)(n,[{key:"logout",value:function(e){var t=this;e.preventDefault(),console.log("logging out"),p.a.post("/user/logout").then((function(e){console.log(e.data),200===e.status&&t.props.updateUser({loggedIn:!1,username:null}),t.props.history.push("/login")})).catch((function(e){console.log("Logout error")}))}},{key:"render",value:function(){var e=this.props.loggedIn;console.log("navbar render, props: "),console.log(this.props);return s.a.createElement("div",{className:"backgrounds"},s.a.createElement("img",{style:{position:"absolute",width:"50px",height:"50px",left:"90%",bottom:"3px"},alt:"logo",src:a(547)}),s.a.createElement("div",{style:{position:"absolute",color:"rgb(217, 179, 114)",textShadow:"0px 0px 10px  red",top:"42px",left:"85.5%",fontSize:"8pt"}},"Change The World"),s.a.createElement("header",{className:"navbar navbar-expand-sm",id:"nav-container"},s.a.createElement("div",{className:"navbar-brand"},e?s.a.createElement("section",{className:"collapse navbar-collapse"},s.a.createElement(d.b,{to:"#",className:"nav-item active",onClick:this.logout},s.a.createElement("span",{className:"nav-link-logout"},s.a.createElement("i",{className:"fas fa-sign-out-alt"},"logout"))),s.a.createElement(d.b,{to:"/",className:"nav-item active "},s.a.createElement("span",{className:"nav-link"},s.a.createElement("i",{className:"fas fa-home","aria-hidden":"true"})))):s.a.createElement("section",{className:"navbar-section"},s.a.createElement(d.b,{to:"/",className:"btn btn-link text-secondary"},s.a.createElement("span",Object(f.a)({className:"text-secondary"},"className","coloring"),s.a.createElement("i",{className:"fas fa-home","aria-hidden":"true"}))),s.a.createElement(d.b,{to:"/login",className:"btn btn-link text-secondary"},s.a.createElement("span",Object(f.a)({className:"text-secondary"},"className","coloring"),"login")),s.a.createElement(d.b,{to:"/signup",className:"btn btn-link"},s.a.createElement("span",Object(f.a)({className:"text-secondary"},"className","coloring"),"sign up"))))))}}]),n}(n.Component)),N=Object(g.g)(y),w=(a(548),a(48)),k=a(67),C=a.n(k),x=a(279),S=a.n(x);a(93);C.a.setApiKey("AIzaSyDxTdbiQM9NRtUgYe3cYN86iuXIleDgb04"),C.a.enableDebug();var O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).getCity=function(e){for(var t=0;t<e.length;t++)if(e[t].types[0]&&"administrative_area_level_2"===e[t].types[0])return e[t].long_name},n.getArea=function(e){for(var t=0;t<e.length;t++)if(e[t].types[0])for(var a=0;a<e[t].types.length;a++)if("sublocality_level_1"===e[t].types[a]||"locality"===e[t].types[a])return e[t].long_name},n.getState=function(e){for(var t=0;t<e.length;t++)for(var a=0;a<e.length;a++)if(e[a].types[0]&&"administrative_area_level_1"===e[a].types[0])return e[a].long_name},n.onChange=function(e){n.setState(Object(f.a)({},e.target.name,e.target.value))},n.onInfoWindowClose=function(e){},n.onMarkerDragEnd=function(e){var t=e.latLng.lat(),a=e.latLng.lng();C.a.fromLatLng(t,a).then((function(e){var s=e.results[0].formatted_address,r=e.results[0].address_components,l=n.getCity(r),o=n.getArea(r),i=n.getState(r);n.setState({address:s||"",area:o||"",city:l||"",state:i||"",markerPosition:{lat:t,lng:a},mapPosition:{lat:t,lng:a}})}),(function(e){console.error(e)}))},n.onPlaceSelected=function(e){console.log("plc",e);var t=e.formatted_address,a=e.address_components,s=n.getCity(a),r=n.getArea(a),l=n.getState(a),o=e.geometry.location.lat(),i=e.geometry.location.lng();n.setState({address:t||"",area:r||"",city:s||"",state:l||"",markerPosition:{lat:o,lng:i},mapPosition:{lat:o,lng:i}}),n.props.userData(n.state)},n.state={address:"",city:"",area:"",state:"",mapPosition:{lat:n.props.center.lat,lng:n.props.center.lng},markerPosition:{lat:n.props.center.lat,lng:n.props.center.lng}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;C.a.fromLatLng(this.state.mapPosition.lat,this.state.mapPosition.lng).then((function(t){console.log("res",t);var a=t.results[0].formatted_address,n=t.results[0].address_components,s=e.getCity(n),r=e.getArea(n),l=e.getState(n);console.log("city",s,r,l),e.setState({address:a||"",area:r||"",city:s||"",state:l||""})}),(function(e){console.error(e)}))}},{key:"shouldComponentUpdate",value:function(e,t){return this.state.markerPosition.lat!==this.props.center.lat||this.state.address!==t.address||this.state.city!==t.city||this.state.area!==t.area||this.state.state!==t.state||this.props.center.lat!==e.center.lat&&void 0}},{key:"render",value:function(){var e=this,t=Object(w.withScriptjs)(Object(w.withGoogleMap)((function(t){return s.a.createElement(w.GoogleMap,{google:e.props.google,defaultZoom:e.props.zoom,defaultCenter:{lat:e.state.mapPosition.lat,lng:e.state.mapPosition.lng}},s.a.createElement(w.InfoWindow,{onClose:e.onInfoWindowClose,position:{lat:e.state.markerPosition.lat+.0018,lng:e.state.markerPosition.lng}},s.a.createElement("div",null,s.a.createElement("span",{style:{padding:0,margin:0}},e.state.address))),s.a.createElement(w.Marker,{google:e.props.google,name:"Dolores park",draggable:!0,onDragEnd:e.onMarkerDragEnd,position:{lat:e.state.markerPosition.lat,lng:e.state.markerPosition.lng}}),s.a.createElement(w.Marker,null),s.a.createElement(S.a,{className:"auto",style:{width:"100%",height:"40px",paddingLeft:"16px",marginTop:"2px",marginBottom:"70px"},onPlaceSelected:e.onPlaceSelected,types:["(regions)"]}))})));return void 0!==this.props.center.lat?s.a.createElement("div",{className:"mapmargin"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:""}),s.a.createElement("input",{type:"text",name:"address",className:"form-control",onChange:this.onChange,readOnly:"readOnly",value:this.state.address})),s.a.createElement("div",{className:"map-framing"},s.a.createElement(t,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyDxTdbiQM9NRtUgYe3cYN86iuXIleDgb04&libraries=places",loadingElement:s.a.createElement("div",{style:{height:"50%"}}),containerElement:s.a.createElement("div",{style:{height:this.props.height}}),mapElement:s.a.createElement("div",{style:{height:"100%"}})})),s.a.createElement("div",null)):s.a.createElement("div",{style:{height:this.props.height}})}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={search:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({search:this.props.searchStuff}),console.log(this.props)}},{key:"render",value:function(){return s.a.createElement("div",{className:"homePage"},s.a.createElement("div",{style:{marginRight:"45px",marginLeft:"20px"}}," ",s.a.createElement(O,{google:this.props.google,center:{lat:41.8960926,lng:-87.6210186},height:"506.5px",zoom:15,userData:this.props.userData})," "))}}]),a}(n.Component);a(140);var D=function(e){return s.a.createElement("form",{className:"everything"},s.a.createElement("div",{className:"form-group"},s.a.createElement("label",{htmlFor:"search"}),s.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search By ZipCode",recordid:"search",id:"ZIP",size:"5"})," ",s.a.createElement("button",{onClick:e.handleFormSubmit,className:"buttonss "},"Search")))},_=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={search:""},e.renderPage=function(t,a,n,s,r,l,o,i,c,m,u,h,p,d,g,f,b,E,v,y,N){e.setState({redirectTo:"/specificPage/"+t,id:t,location:a,imageURL:n,street:s,price:r,host_thumbnail_url:l,latitude:o,longitude:i,house_rules:c,description:m,bedrooms:u,bathrooms:h,amenities:p,property_type:d,notes:g,host_name:f,host_about:b,neighborhood_overview:E,interaction:v,transit:y,name:N})},e.state={redirectTo:null,id:"",location:"",imageURL:"",street:"",price:"",host_thumbnail_url:"",latitude:"",longitude:"",house_rules:"",description:"",bedrooms:"",bathrooms:"",amenities:"",property_type:"",notes:"",host_name:"",host_about:"",neighborhood_overview:"",summary:"",transit:"",name:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({search:this.props.searchStuff})}},{key:"render",value:function(){var e=this;return this.state.redirectTo?s.a.createElement(g.a,{to:{pathname:this.state.redirectTo,state:[this.state.id,this.state.location,this.state.imageURL,this.state.street,this.state.price,this.state.host_thumbnail_url,this.state.latitude,this.state.longitude,this.state.house_rules,this.state.description,this.state.bedrooms,this.state.bathrooms,this.state.amenities,this.state.property_type,this.state.notes,this.state.host_name,this.state.host_about,this.state.neighborhood_overview,this.state.interaction,this.state.transit,this.state.name]}}):s.a.createElement("div",{className:"overflowTest"},s.a.createElement("div",{className:"mywrapper"},s.a.createElement("ul",{className:"center"},s.a.createElement("div",{className:"row"},this.props.results.map((function(t){return s.a.createElement("li",{className:"list  box",key:t.recordid},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:t.fields,className:"box-img-top box-height",src:t.fields.picture_url,onClick:function(){e.renderPage(t.recordid,t.fields.host_location,t.fields.picture_url,t.fields.street,t.fields.price,t.fields.host_thumbnail_url,t.fields.latitude,t.fields.longitude,t.fields.house_rules,t.fields.description,t.fields.bedrooms,t.fields.bathrooms,t.fields.amenities,t.fields.property_type,t.fields.notes,t.fields.host_name,t.fields.host_about,t.fields.neighborhood_overview,t.fields.interaction,t.fields.transit,t.fields.name)}})),s.a.createElement("p",null," ",s.a.createElement("i",{className:"fas fa-dollar-sign"})," ",t.fields.price," | ",s.a.createElement("i",{className:"fas fa-bed"})," ",t.fields.bedrooms," |"," ",s.a.createElement("i",{className:"fas fa-shower"})," ",t.fields.bathrooms),s.a.createElement("p",null,t.fields.street))}))))))}}]),a}(n.Component),P=function(e){return p.a.get("https://data.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-ratings%40public&rows=200&sort=last_scraped&refine.state=IL&refine.host_has_profile_pic=True&refine.zipcode="+e+"&apikey=4b75efb5f8a9dd5164a16a1d095142e91479f897f56a948e83042d9e")},T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={search:"",results:[]},e.searchGiphy=function(t){P(t).then((function(t){return e.setState({results:t.data.records})})).catch((function(e){return console.log(e)}))},e.handleInputChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(f.a)({},a,n))},e.handleFormSubmit=function(t){t.preventDefault(),e.isNumber(e.state.search)?e.searchGiphy(e.state.search):alert("*** Please enter a valid zip code."),e.setState({search:""})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.searchGiphy("60601")}},{key:"isNumber",value:function(e){return!(isNaN(e)||e<60202||e>60827)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(D,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),s.a.createElement(_,{results:this.state.results}))}}]),a}(n.Component);function I(e){var t=e.fluid,a=e.children;return s.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function F(e){var t=e.fluid,a=e.children;return s.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function U(e){var t=e.size,a=e.children;return s.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},a)}var M=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={searchStuff:"",zip:""},e.userData=function(t){e.setState({zip:t.address.split(", ")[1].split(" ")[1]}),console.log(e.state.zip)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",{className:"homePages"},s.a.createElement("div",{className:"jumboPic"},s.a.createElement("div",{className:"tag"},"Change The World",s.a.createElement("i",{className:"fas fa-key"})),s.a.createElement("div",{className:"text-under-title"},"Visiting City of Chicago and looking for Apartments that you like to stay in? Then this web application we provide is the best fit for you! Find your cozy Apartment to stay for the night."),s.a.createElement("img",{style:{width:"70%",height:"500px",borderRadius:"8px",boxShadow:"0px 0px 40px rgb(46, 43, 43)"},alt:"home",src:a(748)})),s.a.createElement(F,null,s.a.createElement(U,{size:"md-6"},s.a.createElement(j,{userData:this.userData})),s.a.createElement(U,{size:"md-6"},s.a.createElement(T,{zip:this.state.zip}))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"column"},s.a.createElement("img",{style:{height:"80px",width:"130px",margin:"0"},src:a(749)}),s.a.createElement("h5",null,"Rent a home"),s.a.createElement("p",null,"We\u2019re creating a seamless online experience \u2013 from shopping on the largest rental network, to applying, to paying rent."),s.a.createElement("button",{className:"Btn-s"},s.a.createElement("a",{href:"https://www.airbnb.com/host/homes"},"Find rentals"))),s.a.createElement("div",{className:"column"},s.a.createElement("img",{style:{height:"80px",width:"90px",margin:"0"},src:a(750)}),s.a.createElement("h5",null,"Sell a home"),s.a.createElement("p",null,"Whether you sell with new Zillow Offers\u2122 or take another approach, we\u2019ll help you navigate the path to a successful sale."),s.a.createElement("button",{className:"Btn-s"},s.a.createElement("a",{href:"https://www.zillow.com/sell/"},"See your options"))),s.a.createElement("div",{className:"column"},s.a.createElement("img",{style:{marginTop:"10px",height:"80px",width:"80px",margin:"0"},src:a(751)}),s.a.createElement("h5",null,"Buy a home"),s.a.createElement("p",null,"Find your place with an immersive photo experience and the most listings, including things you won\u2019t find anywhere else."),s.a.createElement("button",{className:"Btn-s"},s.a.createElement("a",{href:"https://www.trulia.com/IL/Chicago/"},"Search homes")))),s.a.createElement("div",null,s.a.createElement("img",{style:{width:"98%"},src:a(752)}),s.a.createElement("div",{className:"footerImage"},"Change The World! Take a deep dive and browse original neighborhood photos, drone footage, resident reviews and local insights to see if the homes for sale are right for you. We are continuously working to improve the accessibility of our web experience for everyone, and we welcome feedback and accommodation requests.")))}}]),n}(n.Component);a(753),a(96);a(754);var z={width:"270px",maxWidth:"100%",margin:"0 auto",position:"fixed",left:"40%",top:"51%",transform:"translate(-50%,-50%)",zIndex:"999",background:"yellow",opacity:"10px",border:"1px solid white",padding:"10px 20px 30px",borderRadius:"8px",display:"flex",flexDirection:"column"},R={marginBottom:"15px",background:"red",color:"white",padding:"3px 8px",cursor:"pointer",borderRadius:"50%",border:"0.1px solid black",width:"30px",height:"30px",fontWeight:"bold",alignSelf:"flex-end",fontSize:"20px"},q=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=s.a.createElement("div",{style:z},s.a.createElement("button",{style:R,onClick:this.props.onClose},"x"),s.a.createElement("div",null,this.props.children));return this.props.isOpen||(e=null),s.a.createElement("div",null,e)}}]),a}(n.Component),L=a(280),A=a.n(L),W=a(143),B=a.n(W),G=(a(763),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleDayClick=n.handleDayClick.bind(Object(c.a)(n)),n.handleDayMouseEnter=n.handleDayMouseEnter.bind(Object(c.a)(n)),n.handleResetClick=n.handleResetClick.bind(Object(c.a)(n)),n.state=n.getInitialState(),n}return Object(i.a)(a,[{key:"getInitialState",value:function(){return{from:null,to:null,enteredTo:null}}},{key:"isSelectingFirstDay",value:function(e,t,a){var n=e&&W.DateUtils.isDayBefore(a,e);return!e||n||e&&t}},{key:"handleDayClick",value:function(e){var t=this.state,a=t.from,n=t.to;a&&n&&e>=a&&e<=n?this.handleResetClick():this.isSelectingFirstDay(a,n,e)?this.setState({from:e,to:null,enteredTo:null}):this.setState({to:e,enteredTo:e})}},{key:"handleDayMouseEnter",value:function(e){var t=this.state,a=t.from,n=t.to;this.isSelectingFirstDay(a,n,e)||this.setState({enteredTo:e})}},{key:"handleResetClick",value:function(){this.setState(this.getInitialState())}},{key:"render",value:function(){var e=this.state,t=e.from,a=e.to,n=e.enteredTo,r={start:t,end:n},l={before:this.state.from},o=[t,{from:t,to:n}];return s.a.createElement("div",{className:"RangeExample"},s.a.createElement("p",{style:{color:"white"}},!t&&!a&&"Please select your first day of stay.",t&&!a&&"Please select the last day of your stay.",t&&a&&"Selected from ".concat(t.toLocaleDateString()," to\n                  ").concat(a.toLocaleDateString())," ",t&&a&&s.a.createElement("button",{className:"link",onClick:this.handleResetClick},"Reset")),s.a.createElement(B.a,{className:"Range",numberOfMonths:1,fromMonth:t,selectedDays:o,disabledDays:l,modifiers:r,onDayClick:this.handleDayClick,onDayMouseEnter:this.handleDayMouseEnter}),s.a.createElement(A.a,null,s.a.createElement("style",null,"\n    .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {\n      background-color: #f0f8ff !important;\n      color: #4a90e2;\n    }\n    .Selectable .DayPicker-Day {\n      border-radius: 0 !important;\n    }\n    .Selectable .DayPicker-Day--start {\n      border-top-left-radius: 50% !important;\n      border-bottom-left-radius: 50% !important;\n    }\n    .Selectable .DayPicker-Day--end {\n      border-top-right-radius: 50% !important;\n      border-bottom-right-radius: 50% !important;\n    }\n    .DayPicker-Day[role=gridcell] {\n  border-radius: 50% !important;\n    }\n    .DayPicker-Caption{\n      color: white;\n    }\n    .DayPicker-Weekday{\n      color: lightgoldenrodyellow;\n    }\n    hr{\n      color: lightgoldenrodyellow !important;\n    }\n  ")))}}]),a}(s.a.Component)),Y=a(144),Z=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).IncrementItem=function(){a.setState((function(e){return e.quantity<360?{quantity:e.quantity+1}:null}))},a.DecreaseItem=function(){a.setState((function(e){return e.quantity>0?{quantity:e.quantity-1}:null}))},a.ToggleClick=function(){a.setState({show:!a.state.show})},a.handleChange=function(e){a.setState({quantity:e.target.value})},a.ToggleClick=function(){a.setState({show:!a.state.show})},a.handleChange=function(e){a.setState({quantity:e.target.value})},a.state={search:"",isOpen:!1,quantity:1,show:!0,max:3,min:0},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.setState({search:this.props.searchStuff})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(F,null,s.a.createElement(U,{size:"md-6"},s.a.createElement("div",{className:"parent"},s.a.createElement("div",{className:"child bg-one"},s.a.createElement("img",{src:this.props.location.state[2],alt:"picture"}))),s.a.createElement("div",{className:"",style:{height:"600px"}},s.a.createElement("div",{className:"title-of"},s.a.createElement("h3",null," ",this.props.location.state[20]),s.a.createElement("hr",null),s.a.createElement("button",{style:{background:"transparent",outline:"none",border:"transparent"},onClick:function(t){return e.setState({isOpen:!0})}},"  ",s.a.createElement("img",{src:this.props.location.state[5],style:{borderRadius:"50%"},alt:"picture"})),s.a.createElement("br",null),this.props.location.state[15],s.a.createElement("br",null),s.a.createElement("p",null,"host about: ",this.props.location.state[16]),s.a.createElement("hr",null),s.a.createElement("div",{style:{height:"200px"},className:"framing-calc"},s.a.createElement("p",null," ",s.a.createElement("i",{className:"fas fa-bed"})," ",this.props.location.state[10]," | ",s.a.createElement("i",{className:"fas fa-shower"})," ",this.props.location.state[11],"  | ",s.a.createElement("i",{class:"fas fa-dollar-sign"})," ",this.props.location.state[4]),s.a.createElement("button",{className:"buttne-1",onClick:this.IncrementItem}," +")," ",s.a.createElement("input",{className:"inputne",value:this.state.quantity,onChange:this.handleChange})," ",s.a.createElement("button",{className:"buttne",onClick:this.DecreaseItem}," -"),s.a.createElement("p",null,"Tax: ",s.a.createElement(Y.a,{className:"inputne",value:this.state.quantity/.1,onChange:this.handleChange,thousandSeparator:!0,prefix:"$"}),s.a.createElement("br",null),"Total: ",s.a.createElement(Y.a,{className:"inputne",value:this.state.quantity*this.props.location.state[4]*.1+this.props.location.state[4],onChange:this.handleChange,thousandSeparator:!0,prefix:"$"})))),s.a.createElement(q,{isOpen:this.state.isOpen,onClose:function(t){return e.setState({isOpen:!1})}}," ",s.a.createElement("form",{action:"https://formspree.io/zaid.fadel89@yahoo.com",method:"POST"},s.a.createElement("label",{for:"name"}," "),s.a.createElement("input",{type:"text",placeholder:"Name",className:"name",name:"name"}),s.a.createElement("br",null),s.a.createElement("label",{for:"phone"}," "),s.a.createElement("input",{id:"phonenum",placeholder:"Phone",type:"tel",pattern:"^\\d{3}\\d{3}\\d{4}$"}),s.a.createElement("br",null),s.a.createElement("label",{for:"message"},s.a.createElement("textarea",{className:"message",placeholder:"Message...",name:"message",style:{height:"100px",fontStyle:"italic"}})),s.a.createElement("br",null),s.a.createElement("button",{type:"subnits",className:"btn-btbt"},"Send"," ",s.a.createElement("i",{class:"far fa-paper-plane"})))))),s.a.createElement(U,{size:"md-6"},s.a.createElement("div",{className:"scrols"},s.a.createElement("div",{className:"after-image"},s.a.createElement("br",null),s.a.createElement("p",null,"street: ",this.props.location.state[3]),s.a.createElement("hr",null),s.a.createElement("p",null,"house_rules: ",this.props.location.state[8]),s.a.createElement("hr",null),s.a.createElement("p",null,"description: ",this.props.location.state[9]),s.a.createElement("hr",null),s.a.createElement("p",null,"amenities:",this.props.location.state[12]),s.a.createElement("hr",null),s.a.createElement("p",null,"reviews_per_month: ",this.props.location.state[13]),s.a.createElement("hr",null),s.a.createElement("p",null,"notes: ",this.props.location.state[14]),s.a.createElement("hr",null),s.a.createElement("p",null,"neighborhood_overview:",this.props.location.state[17]," "),s.a.createElement("hr",null),s.a.createElement("p",null,"interaction: ",this.props.location.state[18]),s.a.createElement("hr",null),s.a.createElement("p",null,"space: ",this.props.location.state[19]),s.a.createElement("hr",null)),s.a.createElement("div",{className:"calensdar"},s.a.createElement(G,null)),s.a.createElement("hr",null),s.a.createElement("div",{className:"homePage"},s.a.createElement("div",{style:{margin:"50px",width:"100%%",height:"700PX"}}," ",s.a.createElement(O,{google:this.props.google,center:{lat:this.props.location.state[6],lng:this.props.location.state[7]},height:"300px",zoom:13})," "))))),s.a.createElement("div",null,s.a.createElement("img",{style:{width:"98%"},src:a(764)}),s.a.createElement("div",{className:"footerText"})))}}]),n}(n.Component);var X=function(){return s.a.createElement("div",null,s.a.createElement(I,{fluid:!0},s.a.createElement(F,null,s.a.createElement(U,{size:"md-12"},s.a.createElement("h1",null,"404 Page Not Found"),s.a.createElement("h1",null,s.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},$=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={loggedIn:!1,username:null,firstName:null,style:"dark"},e.getUser=e.getUser.bind(Object(c.a)(e)),e.componentDidMount=e.componentDidMount.bind(Object(c.a)(e)),e.updateUser=e.updateUser.bind(Object(c.a)(e)),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"updateUser",value:function(e){this.setState(e)}},{key:"getUser",value:function(){var e=this;p.a.get("/user/").then((function(t){console.log("Get user response: "),console.log(t.data),t.data.user?(console.log(t.data.user),console.log("Get User: There is a user saved in the server session: "),e.setState({loggedIn:!0,username:t.data.user.username})):(console.log("Get user: no user"),e.setState({loggedIn:!1,username:null}))}))}},{key:"render",value:function(){var e=this;return s.a.createElement(d.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(N,{updateUser:this.updateUser,loggedIn:this.state.loggedIn}),this.state.loggedIn&&s.a.createElement("p",{className:"tagName"},"Welcome to our page, ",this.state.firstName,"!"),s.a.createElement("br",null),s.a.createElement(g.d,null,s.a.createElement(g.b,{exact:!0,path:"/",component:M}),s.a.createElement(g.b,{path:"/login",render:function(){return s.a.createElement(v,{updateUser:e.updateUser})}}),s.a.createElement(g.b,{path:"/signup",render:function(){return s.a.createElement(E,null)}}),s.a.createElement(g.b,{exact:!0,path:"/specificPage/:id",component:Z}),s.a.createElement(g.b,{component:X}))))}}]),a}(n.Component);a(765),a(766);l.a.render(s.a.createElement(d.a,null,s.a.createElement($,null)),document.getElementById("root"))},93:function(e,t,a){}},[[281,1,2]]]);
//# sourceMappingURL=main.3e930169.chunk.js.map