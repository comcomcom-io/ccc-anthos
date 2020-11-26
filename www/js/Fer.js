angular.module("esqueleto").run([
    "$templateCache",
    function ($templateCache) {
      $templateCache.put(
        "castingid/castingid.view.html",
        `<ng-include ng-controller=headerController src="\'header/header.view.html\'"></ng-include>
          <title>{{metatags.title}}</title>
          <meta name=description content={{metatags.description}}>
          <div id=nswitch class={{nswitch.$value}}>
            <img class={{nswitch.$value}} src=img/Logo.svg>
          </div>
          <div id=blockie class={{Dsettings.loadedie}}>
            <div class="modernloader {{Dsettings.loaded}}" style=background-color:#fafafa>
            </div>
          </div>
          <div id=wrapper>
            <div id=modules>
              <div class=top>
                <div class="module m-02">
                  <div class=media><img src={{theproject.Header}}></div>
                </div>
                <div class="module m-02">
                  <div class="data top">
                    <div class=date>{{theproject.dateday}} {{theproject.datemonth}} {{theproject.dateyear}}<span>Casting</span></div>
                    <div class=title>{{theproject.Name}}</div>
                    <div class=subtitle>{{theproject.Subtitle}}</div>
                  </div>
                </div>
              </div>
              <div ng-repeat="item in Addoniess | orderBy: \'Order\'" class="module {{item.MediaType}} {{item.Type}}">
                <div ng-if="item.Type == \'m-04 paragraph\'" class=data>
                  <p>{{item.Src}}</p>
                </div>
                <div ng-if="item.Type == \'m-01 quote\'" class=data>
                  <div class=title>{{item.Src}}
                </div>
              </div>
              <div ng-if="item.Type == \'imgvid\'" class=media>
                <img src={{item.Src}}>
              </div>
            </div>
          </div>
        </div>
        <ng-include ng-controller=footerController src="\'footer/footer.view.html\'"></ng-include>`
      ),
        $templateCache.put(
          "ccccasting/ccccasting.view.html",
          `<div ng-if="realog === \'yes\'">
            <link rel=stylesheet href=css/portfolio.css>
            <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
            <div id=login class=projects>
              <a href=/dashboard class=title>In The Park Admin</a>
              <div class=meniu>
                <div class=leftleft>
                  <a href=/dashboard>
                    <span class="material-icons">keyboard_backspace</span> Regresar
                  </a>
                </div>
              <div class=centiecentie>Casting</div>
              <div class=rightright>
                <a href=/newcasting>
                  Add Element <span class="material-icons">add_circle</span>
                </a>
              </div>
            </div>
            <form>
              <div id=repeater ng-repeat="item in casting | orderBy: \'Order\'" class=pblock>
                <div class=arrows>
                  <div id={{item.$id}} class=top ng-click="upNum($event, item)">
                    <span id={{item.$id}} class="material-icons">expand_less</span>
                  </div>
                  <div id={{item.$id}} class=down ng-click="downNum($event, item)">
                    <span id={{item.$id}} class="material-icons">expand_more</span>
                  </div>
                </div>
                <a href=/editcasting/{{item.$id}}>{{item.Name}}</a>
                <div class="actions">
                  <div class=delete>
                    <div style=cursor:pointer>
                      <span ng-if="item.Delete != \'Yes\'" ng-click="item.Delete = \'Yes\'" class="material-icons dno">clear</span>
                      <span ng-if="item.Delete == \'Yes\'">
                        <span id={{item.$id}} ng-click="productDelete($event, item)" class=mimune>&nbsp;Y&nbsp;</span>/<span class=mimune ng-click="item.Delete = \'No\'">&nbsp;N&nbsp;</span>
                      </span>
                    </div>
                  </div>
                  <div class=viewyes>
                    <div ng-click=toggleVisible(item) style=cursor:pointer>
                      <span ng-if="item.Visible == \'On\'" class="material-icons">visibility</span>
                      <span ng-if="item.Visible == \'Off\'" class="material-icons">visibility_off</span>
                    </div>
                  </div>
                  <div class=featured>
                    <div ng-click=toggleFeatured(item) style=cursor:pointer>
                      <span ng-if="item.Featured == \'Yes\'" class="material-icons">star_border</span>
                      <span ng-if="item.Featured == \'No\'" class="material-icons">star</span>
                    </div>
                  </div>
                </div>
              </div>
              <a href=/newcasting class=bottom-add>
                <span class="material-icons">add_circle</span>
              </a>
            </form>
          </div>
          <a href=/casting/{{casting.$id}} target=_blank class=previewpage>
            Preview Page <span class="material-icons">call_made</span>
          </a>
        </div>
        <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "dashboard/dashboard.view.html",
          `<div ng-if="realog === \'yes\'">
            <link rel=stylesheet href=css/portfolio.css>
            <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
            <div id=login class=projects>
              <a href=/dashboard class=title>In The Park Admin</a>
              <div class=meniu>
                <div class=leftleft></div>
                <div class=centiecentie>Dashboard</div>
                <div class=rightright></div>
              </div>
              <form class=d-links>
                <a href=/ccctalento>
                  <div class=pblock>Talento</div>
                </a>
                <a href=/ccccasting>
                  <div class=pblock>Casting</div>
                </a>
                <a href=/cccproduccion>
                  <div class=pblock>Producción</div>
                </a>
                <a href=/studiosettings>
                  <div class=pblock>Nosotros</div>
                </a>
                <center>
                  <div class=viewyesss>
                    <div ng-click=toggleSwitch() style=cursor:pointer>
                      <div ng-if="nswitch.$value == \'siporfavor\'" ng-class="vyes" class=visib>
                        <span class="material-icons">visibility</span> <p>Show website</p>
                      </div>
                      <div ng-if="nswitch.$value == \'nogracias\'" ng-class="vyes" class=visib>
                        <span class="material-icons">visibility_off</span> <p>Hide website</p>
                      </div>
                    </div>
                  </div>
                </center>
                <br>
                <div style="text-align:center; font-size:12px">
                  <span style=cursor:pointer; ng-click=logouteame()>Logout</span>
                </div>
              </form>
            </div>
            <a href=/home target=_blank class=previewpage>
              Preview Website <span class="material-icons">call_made</span>
            </a>
          </div>
          <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "editcasting/editcasting.view.html",
          `<div ng-if="realog === \'yes\'">
          <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
            <div id=login>
              <img class=logo src="https://firebasestorage.googleapis.com/v0/b/ccc-inthepark.appspot.com/o/cccms.svg?alt=media&token=08cf6e5b-636d-4b02-8c41-32fdc5906d80">
              <div class=meniu>
                <div class=leftleft>
                  <a href=/ccccasting>
                    <span class="material-icons">keyboard_backspace</span> Regresar
                  </a>
                </div>
                <div class=centiecentie>{{casting.Name}}</div>
                  <div class=rightright>&nbsp;</div>
                </div>
                <form>
                  <img id=thumbie src={{casting.Thumbnail}} style=width:100%;>
                  <input type=file id=thumb placeholder=hola style=display:none custom-on-change=uThumbnail>
                  <label for=thumb>Thumbnail</label> <img id=headie src={{casting.Header}} style="width:100%; display:none">
                  <input type=file id=header placeholder=hola style=display:none custom-on-change=uHeader>
                  <label for=header>Cover</label>
                  
                  <div class="input">
                    <label>Título</label>
                    <input type=text placeholder="Escribe aquí" spellcheck=false ng-model=pro.Name ng-show="lang != \'eng\'">
                  </div>
                  
                  <div class="input">
                    <label>Subtítulo</label>
                    <input type=text placeholder="Escribe aquí" spellcheck=false ng-model=pro.Subtitle ng-show="lang != \'eng\'">
                  </div>
                  
                  <div ng-repeat="item in addies | orderBy: \'Order\'">
                    <hr>
                    <span class=sectit>
                      <span ng-if="item.Type == \'imgvid\'">Image or Video</span>
                      <span ng-if="item.Type == \'m-04 paragraph\'">Paragraph</span>
                      <span ng-if="item.Type == \'m-01 quote\'">Quote</span>
                    </span>
                    <textarea ng-show="lang != \'eng\'" ng-model=item.Src ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Escribe aquí" ng-blur=addies.$save(item)></textarea>
                    <textarea ng-model=item.Src ng-if="item.Type == \'embed\'" placeholder="Paste iframe here" ng-blur=addies.$save(item)></textarea>
                    <img ng-if="item.Type == \'imgvid\' && item.Src" id=IMG{{item.$id}} src={{item.Src}} style=width:100%;>
                    <input type=file id={{item.$id}} style=display:none custom-on-change=ChangeIMG>
                    <label for={{item.$id}} ng-if="item.Type == \'imgvid\'">Select Picture or Video</label>
                    <div class=halfers ng-if="item.Type == \'imgvid\'">
                      <p>Select the size of the thumbnail inside the category.</p>
                      <input ng-if="item.Type == \'imgvid\'" type=radio ng-model=item.MediaType value=m-01 id=mtfull name=horvsver>
                      <input ng-if="item.Type == \'imgvid\'" type=radio ng-model=item.MediaType value=m-04 id=mtcenter name=horvsver>
                      <input ng-if="item.Type == \'imgvid\'" type=radio ng-model=item.MediaType value=m-02 id=mthalf name=horvsver>
                      <input ng-if="item.Type == \'imgvid\'" type=radio ng-model=item.MediaType value=m-03 id=mtthird name=horvsver>
                      <label ng-if="item.Type == \'imgvid\'" for=mtfull class=half ng-class="{selected: item.MediaType == \'m-01\'}">Full Width</label>
                      <label ng-if="item.Type == \'imgvid\'" for=mtcenter class=half ng-class="{selected: item.MediaType == \'m-04\'}">Center</label>
                      <label ng-if="item.Type == \'imgvid\'" for=mthalf class=half ng-class="{selected: item.MediaType == \'m-02\'}">Half</label>
                      <label ng-if="item.Type == \'imgvid\'" for=mtthird class=half ng-class="{selected: item.MediaType == \'m-03\'}">Third</label>
                    </div>
                    <div style=display:block;height:40px>
                      <div class=blockieup>
                        <div id={{item.$id}} class=top ng-click="upNum($event, item)">
                          <span id={{item.$id}} class="material-icons">expand_less</span>
                        </div>
                        <div id={{item.$id}} class=down ng-click="downNum($event, item)">
                          <span id={{item.$id}} class="material-icons">expand_less</span>
                        </div>
                      </div>
                      <span style="float:right; margin-top:15px;" id={{item.$id}} ng-click="deleteAddonie($event, item)" class=ngremove>Remove</span>
                    </div>
                  </div>
                  <hr>
                  <div style=text-align:center;>
                    <label class="labl">Add new content blocks</label>
                    <div class=plusbutton ng-click=newAddonImg()>
                      <span class="material-icons">photo</span>
                    </div>
                    <div class=plusbutton ng-click=newAddonText()>
                      <span class="material-icons">notes</span>
                    </div>
                    <div class=plusbutton ng-click=newAddonQuote()>
                      <span class="material-icons">format_quote</span>
                    </div>
                  </div>
                  <hr>
  
                  <div class="input">
                    <label>Page URL</label>
                    <input type=text placeholder="This will appear in your URL bar." spellcheck=false ng-model=casting.Url ng-trim=false ng-change="casting.Url = casting.Url.split(\' \').join(\'\')">
                  </div>
                  
                  <div class="input">
                    <label>Description SEO</label>
                    <textarea placeholder="Type here the page's description for search engines." ng-model=casting.SeoDesc></textarea>
                  </div>
                  <hr>
                  
                  <div class=halfers>
                    <p>Select the size of the thumbnail inside the category.</p>
                    <input type=radio ng-model=casting.MediaType value=m-01 id=promtfull name=horvsver checked>
                    <input type=radio ng-model=casting.MediaType value=m-04 id=promtcenter name=horvsver>
                    <input type=radio ng-model=casting.MediaType value=m-02 id=promthalf name=horvsver>
                    <input type=radio ng-model=casting.MediaType value=m-03 id=promtthird name=horvsver>
                    <label for=promtfull class=half ng-class="{selected: casting.MediaType == \'m-01\'}">Full Width</label>
                    <label for=promtcenter class=half ng-class="{selected: casting.MediaType == \'m-04\'}">Center</label>
                    <label for=promthalf class=half ng-class="{selected: casting.MediaType == \'m-02\'}">Half</label>
                    <label for=promtthird class=half ng-class="{selected: casting.MediaType == \'m-03\'}">Third</label>
                  </div>
                  <hr>
                  <button id=btnLogin type=submit ng-click=casting.$save()>Guardar</button>
                </form>
              </div>
              <a href=/casting/{{casting.$id}} target=_blank class=previewpage>Preview Page <span class="material-icons">call_made</span></a>
              <div class=onoffswitch>
                <input ng-model=lang ng-true-value="\'eng\'" ng-false-value="\'esp\'" type=checkbox name=onoffswitch class=onoffswitch-checkbox id=myonoffswitch checked>
                <label class=onoffswitch-label for=myonoffswitch>
                  <span class=onoffswitch-inner></span>
                  <span class=onoffswitch-switch></span>
                </label>
              </div>
              <progress id=uploader class=off></progress>
            </div>
            <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "editproduccion/editproduccion.view.html",
          `<div ng-if="realog === \'yes\'">
            <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
            <div id=login class=title> Admin
              <div class=meniu>
                <div class=leftleft>
                  <a href=/cccproduccion>
                    <span class="material-icons">keyboard_backspace</span> Regresar
                  </a>
                </div>
                <div class=centiecentie>{{produccion.Name}}</div>
                <div class=rightright>&nbsp;</div>
              </div>
              <form>
                <img id=thumbie src={{produccion.Thumbnail}} style=width:100%;>
                <input type=file id=thumb placeholder=hola style=display:none custom-on-change=uThumbnail>
                <label for=thumb>Thumbnail</label>
                <img id=headie src={{produccion.Header}} style="width:100%; display:none">
                <input type=file id=header placeholder=hola style=display:none custom-on-change=uHeader>
                <label for=header>Cover</label>
  
                <div class="input">
                  <label>Título</label>
                  <input type=text placeholder="Escribe aquí" spellcheck=false ng-model=pro.Name ng-show="lang != \'eng\'">
                </div>
                
                <div class="input">
                  <label>Subtítulo</label>
                  <input type=text placeholder="Escribe aquí" spellcheck=false ng-model=pro.Subtitle ng-show="lang != \'eng\'">
                </div>
                
                <div ng-repeat="item in addies | orderBy: \'Order\'">
                <hr>
                <span class=sectit>
                  <span ng-if="item.Type == \'imgvid\'">Image or Video</span>
                  <span ng-if="item.Type == \'m-04 paragraph\'">Paragraph</span>
                  <span ng-if="item.Type == \'m-01 quote\'">Quote</span>
                </span>
                <textarea ng-show="lang != \'eng\'" ng-model=item.Src ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Escribe aquí" ng-blur=addies.$save(item)></textarea>
                <textarea ng-model=item.Src ng-if="item.Type == \'embed\'" placeholder="Paste iframe here" ng-blur=addies.$save(item)></textarea>
                <img ng-if="item.Type == \'imgvid\' && item.Src" id=IMG{{item.$id}} src={{item.Src}} style=width:100%;>
                <input type=file id={{item.$id}} style=display:none custom-on-change=ChangeIMG>
                <label for={{item.$id}} ng-if="item.Type == \'imgvid\'">Select Picture or Video</label>
                <div class=halfers ng-if="item.Type == \'imgvid\'">
                  <p>Select the size of the thumbnail inside the category.</p>
                  <input ng-if="item.Type == \'imgvid\'" type=radio ng-model=item.MediaType value=m-01 id=mtfull name=horvsver>
                  <input ng-if="item.Type == \'imgvid\'" type=radio ng-model=item.MediaType value=m-04 id=mtcenter name=horvsver>
                  <input ng-if="item.Type == \'imgvid\'" type=radio ng-model=item.MediaType value=m-02 id=mthalf name=horvsver>
                  <input ng-if="item.Type == \'imgvid\'" type=radio ng-model=item.MediaType value=m-03 id=mtthird name=horvsver>
                  <label ng-if="item.Type == \'imgvid\'" for=mtfull class=half ng-class="{selected: item.MediaType == \'m-01\'}">Full Width</label>
                  <label ng-if="item.Type == \'imgvid\'" for=mtcenter class=half ng-class="{selected: item.MediaType == \'m-04\'}">Center</label>
                  <label ng-if="item.Type == \'imgvid\'" for=mthalf class=half ng-class="{selected: item.MediaType == \'m-02\'}">Half</label>
                  <label ng-if="item.Type == \'imgvid\'" for=mtthird class=half ng-class="{selected: item.MediaType == \'m-03\'}">Third</label>
              </div>
              <div style=display:block;height:40px>
                <div class=blockieup>
                  <div id={{item.$id}} class=top ng-click="upNum($event, item)">
                    <span id={{item.$id}} class="material-icons">expand_less</span>
                  </div>
                  <div id={{item.$id}} class=down ng-click="downNum($event, item)">
                    <span id={{item.$id}} class="material-icons">expand_more</span>
                  </div>
                </div>
                <span style="float:right; margin-top:15px;" id={{item.$id}} ng-click="deleteAddonie($event, item)" class=ngremove>Remove</span>
              </div>
            </div>
            <hr>
            <div style=text-align:center;>
              <label class="labl">Add new content blocks</label>
              <div class=plusbutton ng-click=newAddonImg()>
                <span class="material-icons">photo</span>
              </div>
              <div class=plusbutton ng-click=newAddonText()>
                <span class="material-icons">notes</span>
              </div>
              <div class=plusbutton ng-click=newAddonQuote()>
                <span class="material-icons">format_quote</span>
              </div>
              <hr>
  
              <div class="input">
                <label>Page URL</label>
                <input type=text placeholder="This will appear in your URL bar." spellcheck=false ng-model=produccion.Url ng-trim=false ng-change="produccion.Url = produccion.Url.split(\' \').join(\'\')">
              </div>
  
              <div class="input">
                <label>Description SEO</label>
                <textarea placeholder="Type here the page's description for search engines." ng-model=produccion.SeoDesc></textarea>
              </div>
              <hr>
              
              <div class=halfers>
                <p>Select the size of the thumbnail inside the category.</p>
                <input type=radio ng-model=produccion.MediaType value=m-01 id=promtfull name=horvsver checked>
                <input type=radio ng-model=produccion.MediaType value=m-04 id=promtcenter name=horvsver>
                <input type=radio ng-model=produccion.MediaType value=m-02 id=promthalf name=horvsver>
                <input type=radio ng-model=produccion.MediaType value=m-03 id=promtthird name=horvsver>
                <label for=promtfull class=half ng-class="{selected: produccion.MediaType == \'m-01\'}">Full Width</label>
                <label for=promtcenter class=half ng-class="{selected: produccion.MediaType == \'m-04\'}">Center</label>
                <label for=promthalf class=half ng-class="{selected: produccion.MediaType == \'m-02\'}">Half</label>
                <label for=promtthird class=half ng-class="{selected: produccion.MediaType == \'m-03\'}">Third</label>
              </div>
              <hr>
              <button id=btnLogin type=submit ng-click=produccion.$save()>Guardar</button>
            </form>
          </div>
          <a href=/produccion/{{produccion.$id}} target=_blank class=previewpage>
            Preview Page <span class="material-icons">call_made</span>
          </a>
          <div class=onoffswitch>
            <input ng-model=lang ng-true-value="\'eng\'" ng-false-value="\'esp\'" type=checkbox name=onoffswitch class=onoffswitch-checkbox id=myonoffswitch checked>
            <label class=onoffswitch-label for=myonoffswitch>
            <span class=onoffswitch-inner></span>
            <span class=onoffswitch-switch></span>
          </label>
        </div>
        <progress id=uploader class=off></progress>
      </div>
      <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "editproject/editproject.view.html",
          `<div ng-if="realog === \'yes\'">
            <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
            <div id=login class=title>In The Park Admin
              <div class=meniu>
                <div class=leftleft>
                  <a><span class="material-icons">keyboard_backspace</span> Regresar</a>
                </div>
                <div class=centiecentie>{{project.Name}}</div>
                <div class=rightright>&nbsp;</div>
              </div>
              <form>
                <img id=thumbie src={{project.Thumbnail}} style=width:100%;> <input type=file id=thumb placeholder=hola style=display:none custom-on-change=uThumbnail>
                <label for=thumb>Thumbnail</label>
                <input type=text placeholder=Nombre spellcheck=false ng-model=project.Name ng-show="lang != \'eng\'">
                <input type=text placeholder=Name spellcheck=false ng-model=project.NameE ng-show="lang == \'eng\'">
                <input type=text placeholder=Categorias spellcheck=false ng-model=project.Tags ng-show="lang != \'eng\'">
                <input type=text placeholder=Tags spellcheck=false ng-model=project.TagsE ng-show="lang == \'eng\'">
                <div class=halfers>
                  <p>Select the size of the thumbnail inside the category.</p>
                  <input type=radio ng-model=project.Settings.Ratio value=l id=horwin name=horvsver checked>
                  <input type=radio ng-model=project.Settings.Ratio value=p id=verwin name=horvsver>
                  <label for=horwin class=half ng-class="{selected: project.Settings.Ratio == \'l\'}">Landscape</label>
                  <label for=verwin class=half ng-class="{selected: project.Settings.Ratio == \'p\'}">Portrait</label>
                </div>
                <hr>
                <img id=headie src={{project.Header}} style=width:100%;>
                <input type=file id=header placeholder=hola style=display:none custom-on-change=uHeader>
                <label for=header>Header</label>
                <input type=text placeholder=Titulo spellcheck=false ng-model=project.Title id=titulo ng-show="lang != \'eng\'">
                <input type=text placeholder=Title spellcheck=false ng-model=project.TitleE id=title ng-show="lang == \'eng\'">
                <textarea rows=4 placeholder=Descripcion id=descripcion ng-model=project.Description spellcheck=false ng-show="lang != \'eng\'"></textarea>
                <textarea rows=4 placeholder=Description id=description ng-model=project.DescriptionE spellcheck=false ng-show="lang == \'eng\'"></textarea>
                <div ng-repeat="item in addies | orderBy: \'Order\'">
                  <hr>
                  <span class=sectit>
                    <span ng-if="item.Type == \'imgvid\'">Image or Video</span>
                    <span ng-if="item.Type == \'text\'">Paragraph</span>
                    <span ng-if="item.Type == \'twoc\'">Two Columns</span>
                    <span ng-if="item.Type == \'quote\'">Quote</span>
                    <span ng-if="item.Type == \'embed\'">Embed</span>
                  </span>
                  <textarea ng-show="lang != \'eng\'" ng-model=item.Src ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Escribe aquí" ng-blur=addies.$save(item)></textarea>
                  <textarea ng-show="lang == \'eng\'" ng-model=item.SrcE ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Type here" ng-blur=addies.$save(item)></textarea>
                  <textarea ng-model=item.Src ng-if="item.Type == \'embed\'" placeholder="Paste iframe here" ng-blur=addies.$save(item)></textarea>
                  <img ng-if="item.Type == \'imgvid\' && item.Src" id=IMG{{item.$id}} src={{item.Src}} style=width:100%;>
                  <input type=file id={{item.$id}} style=display:none custom-on-change=ChangeIMG>
                  <label for={{item.$id}} ng-if="item.Type == \'imgvid\'">Select Picture or Video</label>
                  <div style=display:block;height:40px>
                    <div class=blockieup>
                      <div id={{item.$id}} class=top ng-click="upNum($event, item)">
                        <span id={{item.$id}} class="material-icons">expand_less</span>
                      </div>
                      <div id={{item.$id}} class=down ng-click="downNum($event, item)">
                        <span id={{item.$id}} class="material-icons">expand_more</span>
                      </div>
                    </div>
                    <span style="float:right; margin-top:15px;" id={{item.$id}} ng-click="deleteAddonie($event, item)" class=ngremove>Remove</span>
                  </div>
                </div>
                <hr>
                <div style=text-align:center;>
                  <label class="labl">Add new content blocks</label>
                  <div class=plusbutton ng-click=newAddonImg()>
                    <span class="material-icons">photo</span>
                  </div>
                  <div class=plusbutton ng-click=newAddonText()>
                    <span class="material-icons">notes</span>
                  </div>
                  <div class=plusbutton ng-click=newAddonTwoc()>
                    <img src=img/twoc.svg>
                  </div>
                  <div class=plusbutton ng-click=newAddonQuote()>
                    <span class="material-icons">format_quote</span>
                  </div>
                  <div class=plusbutton ng-click=newAddonEmbed()>
                    <img src=img/embed.svg>
                  </div>
                </div>
                <hr>
                <textarea rows=4 placeholder="Areas desarrolladas" id=descripcion ng-model=project.Areas spellcheck=false ng-show="lang != \'eng\'"></textarea>
                <textarea rows=4 placeholder="Developed Areas" id=description ng-model=project.AreadE spellcheck=false ng-show="lang == \'eng\'"></textarea>
                <textarea rows=4 placeholder=Creditos id=descripcion ng-model=project.Credits spellcheck=false ng-show="lang != \'eng\'"></textarea>
                <textarea rows=4 placeholder=Credits id=description ng-model=project.CreditsE spellcheck=false ng-show="lang == \'eng\'"></textarea>
                <hr>
                <button id=btnLogin type=submit ng-click=project.$save()>Save</button>
              </form>
            </div>
            
            <a href=/project/{{project.$id}} target=_blank class=gotoproject>View Project</a>
            <div class=onoffswitch>
              <input ng-model=lang ng-true-value="\'eng\'" ng-false-value="\'esp\'" type=checkbox name=onoffswitch class=onoffswitch-checkbox id=myonoffswitch checked>
              <label class=onoffswitch-label for=myonoffswitch>
                <span class=onoffswitch-inner></span>
                <span class=onoffswitch-switch></span>
              </label>
            </div>
            <progress id=uploader class=off></progress>
          </div>
          <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "cccproduccion/cccproduccion.view.html",
          `<div ng-if="realog === \'yes\'">
            <link rel=stylesheet href=css/portfolio.css>
            <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
            <div id=login class=projects>
              <a href=/dashboard class=title>In The Park Admin</a>
            <div class=meniu>
              <div class=leftleft>
                <a href=/dashboard>
                  <span class="material-icons">keyboard_backspace</span> Regresar
                </a>
              </div>
              <div class=centiecentie>produccion</div>
              <div class=rightright>
                <a href=/newproduccion>
                  Add Element <span class="material-icons">add_circle</span>
                </a>
              </div>
            </div>
            <form>
              <div id=repeater ng-repeat="item in produccion | orderBy: \'Order\'" class=pblock>
                <div class=arrows>
                  <div id={{item.$id}} class=top ng-click="upNum($event, item)">
                    <span id={{item.$id}} class="material-icons">expand_less</span>
                  </div>
                <div id={{item.$id}} class=down ng-click="downNum($event, item)">
                  <span id={{item.$id}} class="material-icons">expand_more</span>
                </div>
              </div>
              <a href=/editproduccion/{{item.$id}}>{{item.Name}}</a>
              <div class="actions">
                <div class=delete>
                  <div style=cursor:pointer>
                    <span ng-if="item.Delete != \'Yes\'" ng-click="item.Delete = \'Yes\'" class="material-icons dno">clear</span>
                    <span ng-if="item.Delete == \'Yes\'">
                      <span id={{item.$id}} ng-click="productDelete($event, item)" class=mimune>&nbsp;Y&nbsp;</span>/<span class=mimune ng-click="item.Delete = \'No\'">&nbsp;N&nbsp;</span>
                    </span>
                  </div>
                </div>
                <div class=viewyes>
                  <div ng-click=toggleVisible(item) style=cursor:pointer>
                    <span ng-if="item.Visible == \'On\'" class="material-icons">visibility</span>
                    <span ng-if="item.Visible == \'Off\'" class="material-icons">visibility_off</span>
                  </div>
                </div>
                <div class=featured>
                  <div ng-click=toggleFeatured(item) style=cursor:pointer>
                    <span ng-if="item.Featured == \'Yes\'" class="material-icons">star_border</span>
                    <span ng-if="item.Featured == \'No\'" class="material-icons">star</span>
                  </div>
                </div>
              </div>
            </div>
            <a href=/newproduccion class=bottom-add>
              <span class="material-icons">add_circle</span>
            </a>
            </form>
            </div>
          </div>
          <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "edittalento/edittalento.view.html",
          `<div ng-if="realog === \'yes\'">
          <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
          <div id=login class=title>In The Park Admin
          <div class=meniu>
            <div class=leftleft>
              <a href=/ccctalento>
                <span class="material-icons">keyboard_backspace</span> Regresar
              </a>
            </div>
            <div class=centiecentie>{{talento.Name}}</div>
            <div class=rightright>&nbsp;</div>
          </div>
          <form>
            <img id=thumbie src={{talento.Thumbnail}} style=width:100%;>
            <input type=file id=thumb placeholder=hola style=display:none custom-on-change=uThumbnail>
            <label for=thumb>Thumbnail</label>
  
            <div class="input">
              <label>Nombre</label>
              <input type=text placeholder="Nombre y apellidos" spellcheck=false ng-model=talento.Name ng-show="lang != \'eng\'">
            </div>
            
            <div class="input">
              <label>Altura</label>
              <input type=text placeholder="Ej. 1.80m" spellcheck=false ng-model=talento.Altura ng-show="lang != \'eng\'">
            </div>
            
            <div class="input">
              <label>Busto</label>
              <input type=text placeholder="Ej. 90cm" spellcheck=false ng-model=talento.Busto ng-show="lang != \'eng\'">
            </div>
  
            <div class="input">
              <label>Cintura</label>
              <input type=text placeholder="Ej. 60cm" spellcheck=false ng-model=talento.Cintura ng-show="lang != \'eng\'">
            </div>
  
            <div class="input">
              <label>Cadera</label>
              <input type=text placeholder="Ej. 60cm" spellcheck=false ng-model=talento.Cadera ng-show="lang != \'eng\'">
            </div>
  
            <div class="input">
              <label>Zapato</label>
              <input type=text placeholder="Ej. 25.5" spellcheck=false ng-model=talento.Zapato ng-show="lang != \'eng\'">
            </div>
  
            <div class="input">
              <label>Color cabello</label>
              <input type=text placeholder="Ej. Rubio" spellcheck=false ng-model=talento.Cabello ng-show="lang != \'eng\'">
            </div>
            
            <div class="input">
              <label>Color de ojos</label>
              <input type=text placeholder="Ej. Azul" spellcheck=false ng-model=talento.Ojos ng-show="lang != \'eng\'">
            </div>
  
            <div ng-repeat="item in addies | orderBy: \'Order\'">
              <hr>
              <span class=sectit>
                <span ng-if="item.Type == \'imgvid\'">Image or Video</span>
                <span ng-if="item.Type == \'text\'">Paragraph</span>
                <span ng-if="item.Type == \'twoc\'">Two Columns</span>
                <span ng-if="item.Type == \'quote\'">Quote</span>
                <span ng-if="item.Type == \'embed\'">Embed</span>
              </span>
              <textarea ng-show="lang != \'eng\'" ng-model=item.Src ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Escribe aquí" ng-blur=addies.$save(item)></textarea>
              <textarea ng-show="lang == \'eng\'" ng-model=item.SrcE ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Type here" ng-blur=addies.$save(item)></textarea>
              <textarea ng-model=item.Src ng-if="item.Type == \'embed\'" placeholder="Paste iframe here" ng-blur=addies.$save(item)></textarea>
              <img ng-if="item.Type == \'imgvid\' && item.Src" id=IMG{{item.$id}} src={{item.Src}} style=width:100%;>
              <input type=file id={{item.$id}} style=display:none custom-on-change=ChangeIMG>
              <label for={{item.$id}} ng-if="item.Type == \'imgvid\'">Select Picture or Video</label>
              <div style=display:block;height:40px>
                <div class=blockieup>
                  <div id={{item.$id}} class=top ng-click="upNum($event, item)">
                    <span id={{item.$id}} class="material-icons">expand_less</span>
                  </div>
                  <div id={{item.$id}} class=down ng-click="downNum($event, item)">
                    <span id={{item.$id}} class="material-icons">expand_more</span>
                  </div>
                </div>
                <span style="float:right; margin-top:15px;" id={{item.$id}} ng-click="deleteAddonie($event, item)" class=ngremove>Remove</span>
              </div>
            </div>
            <hr>
            <div style=text-align:center;>
              <label>Add new image block</label>
              <div class=plusbutton ng-click=newAddonImg()>
                <span class="material-icons">photo</span>
              </div>
            </div>
            <hr>
  
            <div class="input">
              <label>Page URL</label>
              <input type=text placeholder="This will appear in your URL bar." spellcheck=false ng-model=talento.Url ng-trim=false ng-change="talento.Url = talento.Url.split(\' \').join(\'\')">
            </div>
            
            <div class="input">
              <label>Description SEO</label>
              <textarea placeholder="Type here the page's description for search engines." ng-model=talento.SeoDesc></textarea>
            </div>
            <hr>
            
            <input type=text placeholder=Instagram spellcheck=false ng-model=talento.Instagram ng-show="lang != \'eng\'">
            <hr>
            <button id=btnLogin type=submit ng-click=talento.$save()>Guardar</button>
          </form>
        </div>
        <a href=/talento/{{talento.$id}} target=_blank class=previewpage>
          Preview Page <span class="material-icons">call_made</span>
        </a>
        <div class=onoffswitch>
          <input ng-model=lang ng-true-value="\'eng\'" ng-false-value="\'esp\'" type=checkbox name=onoffswitch class=onoffswitch-checkbox id=myonoffswitch checked>
          <label class=onoffswitch-label for=myonoffswitch>
            <span class=onoffswitch-inner></span>
            <span class=onoffswitch-switch></span>
          </label>
        </div>
        <progress id=uploader class=off></progress>
      </div>
      <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "featured/featured.view.html",
          "<div class=grid><a ng-repeat=\"item in projects | orderBy: 'Order'\" ng-if=\"item.Featured == 'Yes' && item.Visible == 'On' && theproject.Name != item.Name || item.Featured == 'Yes' && item.Visible == 'On' && theproject.NameE != item.NameE\" href=/project/{{item.$id}} class=\"thumbnail {{item.Settings.Ratio}}\" ng-init=mason() custom-on-change=mason style=\"background-image: url({{item.Thumbnail}});\"><div class=thover><div class=ttop><span class=commm ng-if=\"realan != 'eng'\"><div class=namiel>{{item.Name}}</div><div class=tagiel>{{item.Tags}}</div></span> <span class=commm ng-if=\"realan == 'eng'\"><div class=namiel>{{item.NameE}}</div><div class=tagiel>{{item.TagsE}}</div></span></div></div></a> <a class=\"thumbnail l viewmore\" href=/work><div ng-if=\"realan == 'eng'\" class=text>More Work</div><div ng-if=\"realan != 'eng'\" class=text>Más Proyectos</div></a></div>"
        ),
        $templateCache.put(
          "header/header.view.html",
          '<style>\n            #blockie{\n                display: block;\n                width: 100vw;\n                height: 100vh;\n                max-height: 100vh;\n                position: fixed;\n                z-index: 9900000;\n                overflow: hidden;\n                left: 0;\n                top: 0;\n            }\n            #blockie.hidie{\n                animation:fadeh 0s;\n                animation-timing-function:linear;\n                animation-delay: 1.35s;\n                animation-fill-mode:forwards;\n                animation-iteration-count: 1;\n                -webkit-animation-iteration-count: 1;\n                -webkit-animation:fadeh 0s;\n                -webkit-animation-timing-function:linear;\n                -webkit-animation-delay: 1.35s;\n                -webkit-animation-fill-mode: forwards;\n            }\n            #blockie .modernloader{\n                display: block;\n                width: 100%;\n                height: 100%;\n                position: absolute;\n                background-color: #fafafa;\n                overflow: hidden;\n                opacity: 1;\n                transition: background-color .75s ease;\n            }\n            #blockie .modernloader.true {\n                opacity: 1;\n                animation:fadeout .75s;\n                animation-timing-function:linear;\n                animation-delay: .75s;\n                animation-fill-mode:forwards;\n                animation-iteration-count: 1;\n                -webkit-animation-iteration-count: 1;\n                -webkit-animation:fadeout .5s;\n                -webkit-animation-timing-function:linear;\n                -webkit-animation-delay: .75s;\n                -webkit-animation-fill-mode: forwards;\n            }\n            .modernloader.values{\n                background-color: #fafafa;\n                content: {{Dsettings.loadedie}};\n            }\n            #nswitch{\n                display: block;\n                width: 100%;\n                height: 0px;\n                background-color: #000;\n                position: fixed;\n                overflow: hidden;\n                z-index: 5000000;\n                left: 0;\n                opacity: 0;\n                transition: all 1s ease;\n            }\n            #nswitch.siporfavor{\n                height: 100%;\n                opacity: 1;\n                transition: all 1s ease;\n            }\n            #nswitch img{\n                display: block;\n                width: 182px;\n                height: auto;\n                position: fixed;\n                left: 0;\n                right: 0;\n                top: 0;\n                bottom: 0;\n                margin: auto;\n                opacity: 0;\n                transition: opacity 1s ease;\n            }\n            #nswitch img.siporfavor{\n                opacity: 1;\n                transition: opacity 1s ease;\n            }\n</style><div id=nswitch class={{nswitch.$value}}><img class={{nswitch.$value}} src=img/Logo.svg></div><div id=blockie class={{Dsettings.loadedie}}><div class="modernloader {{Dsettings.loaded}}" style=background-color:#fafafa></div></div><div id=logo><a ng-href="/"><img src=img/Logo.svg></a></div><header id=header style=top:0px;><ul class=nav><li><a ng-href=/talento>Talento</a></li><li><a ng-href=/casting>Casting</a></li><li><a ng-href="/">Producción</a></li></ul><ul class=right><li><a ng-href=/nosotros>Nosotros</a></li><li><a ng-href=/unete>Unete</a></li></ul></header>'
        ),
        $templateCache.put(
          "footer/footer.view.html",
          "<footer><div class=column><p>In the Park Management® 2020.<br>Todos los Derechos Reservados</p></div><div class=column><p>Río Mosela 200<br>Col. Del Valle<br>Ciudad de México, 21240</p></div><div class=column style=padding-top:0px><ul class=footmenu><li>Sobre Nosotros</li><li>Contacto</li><li>Política de Privacidad</li><li>Términos y Condiciones</li></ul></div></footer>"
        ),
        $templateCache.put(
          "homesettings/homesettings.view.html",
          '<div ng-if="realog === \'yes\'"><div id=login class=projects><a href=/dashboard><img class=logo src=img/Logo.svg></a><div class=meniu><div class=leftleft><a href=/dashboard><span class="material-icons">keyboard_backspace</span> Regresar</a></div><div class=centiecentie>Home Settings</div><div class=rightright></div></div><form><div ng-repeat="item in banner"><img id=IMG{{$id}} src={{item[0].Src}} style=width:100%;> <input type=file id={{item.$id}} placeholder=hola style=display:none custom-on-change=upBannerEX name=EX{{$index}}> <label for={{item.$id}}>Select Picture or Video</label> <textarea ng-blur=banner.$save(item) ng-show="lang != \'eng\'" ng-model=item[0].Copy placeholder="Escribe aquí"></textarea> <textarea ng-blur=banner.$save(item) ng-show="lang == \'eng\'" ng-model=item[0].CopyE placeholder="Type here"></textarea> <input type=text ng-blur=banner.$save(item) ng-model=item[0].Url><div style=text-align:right><span ng-click=deleteBanner(item) class=ngremove>Remove</span></div><br><br></div><div ng-repeat="item in homie.Banner track by $index"><img id=bannie{{$index}} src={{item.Src}} style=width:100%;display:none> <input type=file id=bi{{$index}} placeholder=hola style=display:none custom-on-change=upBanner name={{$index}}> <label for=bi{{$index}}>Select Picture or Video</label> <textarea ng-show="lang != \'eng\'" ng-model=item.Copy placeholder="Escribe aquí"></textarea> <textarea ng-show="lang == \'eng\'" ng-model=item.CopyE placeholder="Type here"></textarea> <input type=text ng-model=item.Url placeholder=Url><div style=text-align:right><span ng-click=deleteBanner($index) class=ngremove>Remove</span></div><br><br></div><hr><div style=text-align:center;><div class=plusbutton ng-click=newBanner()><span class="material-icons">photo</span></div></div></form><form><button ng-click=tobannie()>Save</button></form></div><div class=onoffswitch><input ng-model=lang ng-true-value="\'eng\'" ng-false-value="\'esp\'" type=checkbox name=onoffswitch class=onoffswitch-checkbox id=myonoffswitch checked> <label class=onoffswitch-label for=myonoffswitch><span class=onoffswitch-inner></span> <span class=onoffswitch-switch></span></label></div><progress id=uploader class=off></progress></div><div ng-if="realog != \'yes\'" ng-init=tologin()></div>'
        ),
        $templateCache.put(
          "home/home.view.html",
          "<title>{{metatags.title}}</title><meta name=description content={{metatags.description}}><ng-include ng-controller=headerController src=\"'header/header.view.html'\"></ng-include><ng-include ng-controller=produccionController src=\"'produccion/produccion.view.html'\"></ng-include><ng-include ng-controller=footerController src=\"'footer/footer.view.html'\"></ng-include>"
        ),
        $templateCache.put(
          "menusettings/menusettings.view.html",
          '<div ng-if="realog === \'yes\'"><div id=login class=projects><a href=/dashboard class=title>In The Park Admin</a><div class=meniu><div class=leftleft><a href=><span class="material-icons">keyboard_backspace</span> Regresar</a></div><div class=centiecentie>Menu Settings</div><div class=rightright></div></div><form><div ng-repeat="item in newMenuEsp" ng-show="lang != \'eng\'"><input ng-model=item.Data ng-blur=newMenuEsp.$save(item) type=text placeholder=Categoria spellcheck=false><div style=text-align:right><span ng-click=DelEsp(item) class=ngremove>Remove</span></div></div><div style=text-align:center; ng-show="lang != \'eng\'"><div class=plusbutton ng-click=newEsp()><img src=img/url.svg></div></div><div ng-repeat="item in newMenuEng" ng-show="lang == \'eng\'"><input ng-model=item.Data ng-blur=newMenuEng.$save(item) type=text placeholder=Categoria spellcheck=false><div style=text-align:right><span ng-click=DelEng(item) class=ngremove>Remove</span></div></div><div style=text-align:center; ng-show="lang == \'eng\'"><div class=plusbutton ng-click=newEng()><img src=img/url.svg></div></div></form></div><div class=onoffswitch><input ng-model=lang ng-true-value="\'eng\'" ng-false-value="\'esp\'" type=checkbox name=onoffswitch class=onoffswitch-checkbox id=myonoffswitch checked> <label class=onoffswitch-label for=myonoffswitch><span class=onoffswitch-inner></span> <span class=onoffswitch-switch></span></label></div></div><div ng-if="realog != \'yes\'" ng-init=tologin()></div>'
        ),
        $templateCache.put(
          "login/login.view.html",
          '<div id=login class=title>In The Park Admin<form><input id=txtPassword type=password placeholder=****** ng-model=user.pass><div style=text-align:center>{{error}}</div><button id=btnLogin ng-click=access()>Access</button></form><div ng-if="realog === \'yes\'" ng-init=todash()>asdfasd</div></div>'
        ),
        $templateCache.put(
          "newcasting/newcasting.view.html",
          `<div ng-if="realog === \'yes\'">
          <link rel=stylesheet href=css/portfolio.css>
          <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
          <div id=login>
            <a href=/dashboard class=title>In The Park Admin</a>
            <div class=meniu>
              <div class=leftleft>
                <a href=/ccccasting>
                  <span class="material-icons">keyboard_backspace</span> Regresar
                </a>
              </div>
              <div class=centiecentie>Crear Casting</div>
              <div class=rightright>&nbsp;</div>
            </div>
            <form>
              <img id=thumbie src="media/PlaceholderImage.jpg" style="width:100%; display:none">
              <input type=file id=thumb placeholder=hola style=display:none custom-on-change=uThumbnail>
              <label for=thumb>Thumbnail</label>
              
              <img id=headie src style="width:100%; display:none">
              <input type=file id=header placeholder=hola style=display:none custom-on-change=uHeader>
              <label for=header>Cover</label>
  
              <div class="input">
                <label>Título</label>
                <input type=text placeholder=Titulo spellcheck=false ng-model=pro.Name ng-show="lang != \'eng\'">
              </div>
  
              <div class="input">
                <label>Subtítulo</label>
                <input type=text placeholder spellcheck=false ng-model=pro.Subtitle ng-show="lang != \'eng\'">
              </div>
              <br><br>
              <div ng-repeat="item in pro.Addon track by $index">
              <hr>
              <span class=sectit>
                <span ng-if="item.Type == \'imgvid\'">Image or Video</span>
                <span ng-if="item.Type == \'m-04 paragraph\'">Paragraph</span>
                <span ng-if="item.Type == \'m-01 quote\'">Quote</span></span>
                <textarea ng-show="lang != \'eng\'" ng-model=item.Src ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Escribe aquí"></textarea>
                <textarea ng-show="lang == \'eng\'" ng-model=item.SrcE ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Type here"></textarea>
                <textarea ng-model=item.Src ng-if="item.Type == \'embed\'" placeholder="Paste iframe here"></textarea>
                <img id=hollie{{$index}} style="width:100%; display:none" ng-if="item.Type == \'imgvid\'">
                <input type=file id=iv{{$index}} placeholder=hola style=display:none ng-if="item.Type == \'imgvid\'" custom-on-change=upAddonImgVid name={{$index}}>
                <label for=iv{{$index}} ng-if="item.Type == \'imgvid\'">Select Picture or Video</label>
                
                <div style=text-align:right>
                  <span ng-click="deleteAddon($index, item)" class=ngremove>Remove</span>
                </div>
              </div>
              <hr>
              <div style=text-align:center;>
                <label class="labl">Add new content blocks</label>
                <div class=plusbutton ng-click=newAddonImgVid()>
                  <span class="material-icons">photo</span>
                </div>
                <div class=plusbutton ng-click=newAddonText()>
                  <span class="material-icons">notes</span>
                </div>
                <div class=plusbutton ng-click=newAddonQuote()>
                  <span class="material-icons">format_quote</span>
                </div>
              </div>
              <hr>
  
              <div class="input">
                <label>Page URL</label>
                <input type=text placeholder="This will appear in your URL bar." spellcheck=false ng-model=pro.Url ng-trim=false ng-change="pro.Url = pro.Url.split(\' \').join(\'\')">
              </div>
  
              <div class="input">
                <label>Description SEO</label>
                <textarea placeholder="Type here the page's description for search engines." ng-model=pro.SeoDesc></textarea>
              </div>
              <hr>
              
              <div class=halfers>
                <p>Select the size of the thumbnail inside the category.</p>
                <input type=radio ng-model=pro.MediaType value=m-01 id=promtfull name=horvsver checked>
                <input type=radio ng-model=pro.MediaType value=m-04 id=promtcenter name=horvsver>
                <input type=radio ng-model=pro.MediaType value=m-02 id=promthalf name=horvsver>
                <input type=radio ng-model=pro.MediaType value=m-03 id=promtthird name=horvsver>
                <label for=promtfull class=half ng-class="{selected: pro.MediaType == \'m-01\'}">Full Width</label>
                <label for=promtcenter class=half ng-class="{selected: pro.MediaType == \'m-04\'}">Center</label>
                <label for=promthalf class=half ng-class="{selected: pro.MediaType == \'m-02\'}">Half</label>
                <label for=promtthird class=half ng-class="{selected: pro.MediaType == \'m-03\'}">Third</label>
              </div>
              <hr>
              <button id=btnLogin type=submit ng-disabled="waitSave != 0" ng-click=newP()>{{buttonMgs}}</button>
              <div ng-if=errorMsg class=error>{{errorMsg}}</div>
            </form>
          </div>
          <progress id=uploader class=off></progress>
          <div class=onoffswitch>
            <input ng-model=lang ng-true-value="\'eng\'" ng-false-value="\'esp\'" type=checkbox name=onoffswitch class=onoffswitch-checkbox id=myonoffswitch checked>
            <label class=onoffswitch-label for=myonoffswitch>
              <span class=onoffswitch-inner></span>
              <span class=onoffswitch-switch></span>
            </label>
          </div>
        </div>
        <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "newproject/newproject.view.html",
          `<div ng-if="realog === \'yes\'">
          <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
          <div id=login class=title>In The Park Admin
            <div class=meniu>
              <div class=leftleft>
                <a href=/projectssettings>
                  <span class="material-icons">keyboard_backspace</span> Regresar
                </a>
              </div>
              <div class=centiecentie>New Project</div>
              <div class=rightright>&nbsp;</div>
            </div>
            <form>
              <img id=thumbie src style="width:100%; display:none">
              <input type=file id=thumb placeholder=hola style=display:none custom-on-change=uThumbnail>
              <label for=thumb>Thumbnail</label>
              <input type=text placeholder=Nombre spellcheck=false ng-model=pro.Name ng-show="lang != \'eng\'">
              <input type=text placeholder=Name spellcheck=false ng-model=pro.NameE ng-show="lang == \'eng\'">
              <input type=text placeholder=URL spellcheck=false ng-model=pro.Url ng-trim=false ng-change="pro.Url = pro.Url.split(\' \').join(\'\')">
              <textarea placeholder="SEO Description" ng-model=pro.SeoDesc></textarea>
              <input type=text placeholder=Categorias spellcheck=false ng-model=pro.Tags ng-show="lang != \'eng\'">
              <input type=text placeholder=Tags spellcheck=false ng-model=pro.TagsE ng-show="lang == \'eng\'">
              <div class=halfers>
                <p>Select the size of the thumbnail inside the category.</p>
                <input type=radio ng-model=pro.Settings.Ratio value=l id=horwin name=horvsver checked>
                <input type=radio ng-model=pro.Settings.Ratio value=p id=verwin name=horvsver>
                <label for=horwin class=half ng-class="{selected: pro.Settings.Ratio == \'l\'}">Landscape</label>
                <label for=verwin class=half ng-class="{selected: pro.Settings.Ratio == \'p\'}">Portrait</label>
              </div>
              <hr>
              <img id=headie src style="width:100%; display:none">
              <input type=file id=header placeholder=hola style=display:none custom-on-change=uHeader>
              <label for=header>Header</label>
              <input type=text placeholder=Titulo spellcheck=false ng-model=pro.Title id=titulo ng-show="lang != \'eng\'">
              <input type=text placeholder=Title spellcheck=false ng-model=pro.TitleE id=title ng-show="lang == \'eng\'">
              <textarea rows=4 placeholder=Descripcion id=descripcion ng-model=pro.Description spellcheck=false ng-show="lang != \'eng\'"></textarea>
              <textarea rows=4 placeholder=Description id=description ng-model=pro.DescriptionE spellcheck=false ng-show="lang == \'eng\'"></textarea>
              <div ng-repeat="item in pro.Addon track by $index">
                <hr>
                <span class=sectit>
                  <span ng-if="item.Type == \'imgvid\'">Image or Video</span>
                  <span ng-if="item.Type == \'text\'">Paragraph</span>
                  <span ng-if="item.Type == \'twoc\'">Two Columns</span>
                  <span ng-if="item.Type == \'quote\'">Quote</span>
                  <span ng-if="item.Type == \'embed\'">Embed</span>
                </span>
                <textarea ng-show="lang != \'eng\'" ng-model=item.Src ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Escribe aquí"></textarea>
                <textarea ng-show="lang == \'eng\'" ng-model=item.SrcE ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Type here"></textarea>
                <textarea ng-model=item.Src ng-if="item.Type == \'embed\'" placeholder="Paste iframe here"></textarea>
                <img id=hollie{{$index}} style="width:100%; display:none" ng-if="item.Type == \'imgvid\'">
                <input type=file id=iv{{$index}} placeholder=hola style=display:none ng-if="item.Type == \'imgvid\'" custom-on-change=upAddonImgVid name={{$index}}>
                <label for=iv{{$index}} ng-if="item.Type == \'imgvid\'">Select Picture or Video</label>
                <div ng-if="item.Type == \'imgvid\'" class=halfers>
                  <p>Select the size of the thumbnail inside the category.</p>
                  <input type=radio ng-model=item.Orientation value=landscape id=horwin{{$index}} name=horvsver checked>
                  <input type=radio ng-model=item.Orientation value=portrait id=verwin{{$index}} name=horvsver>
                  <label for=horwin{{$index}} class=half ng-class="{selected: item.Ratio == \'landscape\'}">Landscape</label>
                  <label for=verwin{{$index}} class=half ng-class="{selected: item.Orientation == \'portrait\'}">Portrait</label>
                </div>
                <div style=text-align:right>
                  <span ng-click="deleteAddon($index, item)" class=ngremove>Remove</span>
                </div>
              </div>
              <hr>
              <div style=text-align:center;>
                <label class="labl">Add new content blocks</label>
                <div class=plusbutton ng-click=newAddonImgVid()>
                  <span class="material-icons">photo</span>
                </div>
                <div class=plusbutton ng-click=newAddonText()>
                  <span class="material-icons">notes</span>
                </div>
                <div class=plusbutton ng-click=newAddonTwoc()>
                  <img src=img/twoc.svg>
                </div>
                <div class=plusbutton ng-click=newAddonQuote()>
                  <span class="material-icons">format_quote</span>
                </div>
                <div class=plusbutton ng-click=newAddonEmbed()>
                  <img src=img/embed.svg>
                </div>
              </div>
              <hr>
              <textarea rows=4 placeholder="Areas desarrolladas" id=descripcion ng-model=pro.Areas spellcheck=false ng-show="lang != \'eng\'"></textarea>
              <textarea rows=4 placeholder="Developed Areas" id=description ng-model=pro.AreadE spellcheck=false ng-show="lang == \'eng\'"></textarea>
              <textarea rows=4 placeholder=Creditos id=descripcion ng-model=pro.Credits spellcheck=false ng-show="lang != \'eng\'"></textarea>
              <textarea rows=4 placeholder=Credits id=description ng-model=pro.CreditsE spellcheck=false ng-show="lang == \'eng\'"></textarea>
              <hr>
              <button id=btnLogin type=submit ng-disabled="waitSave != 0" ng-click=newP()>{{buttonMgs}}</button>
              <div ng-if=errorMsg class=error>{{errorMsg}}</div>
            </form>
          </div>
          <progress id=uploader class=off></progress>
          <div class=onoffswitch>
            <input ng-model=lang ng-true-value="\'eng\'" ng-false-value="\'esp\'" type=checkbox name=onoffswitch class=onoffswitch-checkbox id=myonoffswitch checked>
            <label class=onoffswitch-label for=myonoffswitch>
              <span class=onoffswitch-inner></span>
              <span class=onoffswitch-switch></span>
            </label>
          </div>
        </div>
        <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "casting/casting.view.html",
          `<ng-include ng-controller=headerController src="\'header/header.view.html\'"></ng-include>
          <div id=wrapper>
            <div id=modules>
              <div ng-repeat="item in casting | orderBy: \'Order\'" ng-if="item.Visible == \'On\'" class="module {{item.MediaType}}">
                <div class=media>
                  <a href=/casting/{{item.$id}}>
                    <img src={{item.Thumbnail}}>
                  </a>
                </div>
                <div class=data>
                  <div class=date>{{item.dateday}} {{item.datemonth}} {{item.dateyear}}</div>
                  <div class=title>
                    <a href=/casting/{{item.$id}}>{{item.Name}}</a>
                  </div>
                  <div class=subtitle>
                    <a href=/casting/{{item.$id}}>{{item.Subtitle}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ng-include ng-controller=footerController src="\'footer/footer.view.html\'"></ng-include>`
        ),
        $templateCache.put(
          "ccctalento/ccctalento.view.html",
          `<div ng-if="realog === \'yes\'">
            <link rel=stylesheet href=css/portfolio.css>
            <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
            <div id=login class=projects>
              <a href=/dashboard class=title>In The Park Admin</a>
              <div class=meniu>
                <div class=leftleft>
                  <a href=/dashboard>
                    <span class="material-icons">keyboard_backspace</span> Regresar
                  </a>
                </div>
                <div class=centiecentie>Talento</div>
                <div class=rightright>
                  <a href=/newtalent>
                    Add Element <span class="material-icons">add_circle</span>
                  </a>
                </div>
              </div>
              <form>
                <div id=repeater ng-repeat="item in talento | orderBy: \'Order\'" class=pblock>
                  <div class=arrows>
                    <div id={{item.$id}} class=top ng-click="upNum($event, item)">
                      <span id={{item.$id}} class="material-icons">expand_less</span>
                    </div>
                  <div id={{item.$id}} class=down ng-click="downNum($event, item)">
                    <span id={{item.$id}} class="material-icons">expand_more</span>
                  </div>
                </div>
              <a href=/edittalento/{{item.$id}}>{{item.Name}}</a>
              <div class="actions">
                <div class=delete>
                  <div style=cursor:pointer>
                    <span ng-if="item.Delete != \'Yes\'" ng-click="item.Delete = \'Yes\'" class="material-icons dno">clear</span>
                    <span ng-if="item.Delete == \'Yes\'">
                      <span id={{item.$id}} ng-click="productDelete($event, item)" class=mimune>&nbsp;Y&nbsp;</span>/<span class=mimune ng-click="item.Delete = \'No\'">&nbsp;N&nbsp;</span>
                    </span>
                  </div>
                </div>
                <div class=viewyes>
                  <div ng-click=toggleVisible(item) style=cursor:pointer>
                    <span ng-if="item.Visible == \'On\'" class="material-icons">visibility</span>
                    <span ng-if="item.Visible == \'Off\'" class="material-icons">visibility_off</span>
                  </div>
                </div>
                <div class=featured>
                  <div ng-click=toggleFeatured(item) style=cursor:pointer>
                    <span ng-if="item.Featured == \'Yes\'" class="material-icons">star_border</span>
                    <span ng-if="item.Featured == \'No\'" class="material-icons">star</span>
                  </div>
                </div>
              </div>
            </div>
            <a href=/newtalent class=bottom-add>
              <span class="material-icons">add_circle</span>
            </a>
          </form>
          <a href=/talento target=_blank class=previewpage>
            Preview Page <span class="material-icons">call_made</span>
          </a>
        </div>
      </div>
      <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "produccion/produccion.view.html",
          '<div id=wrapper><div id=modules><div ng-repeat="item in produccion | orderBy: \'Order\'" ng-if="item.Visible == \'On\'" class="module {{item.MediaType}}"><div class=media><a href=/produccion/{{item.$id}}><img src={{item.Thumbnail}}></a></div><div class=data><div class=date>{{item.dateday}} {{item.datemonth}} {{item.dateyear}}</div><div class=title><a href=/produccion/{{item.$id}}>{{item.Name}}</a></div><div class=subtitle><a href=/produccion/{{item.$id}}>{{item.Subtitle}}</a></div></div></div></div></div>'
        ),
        $templateCache.put(
          "project/project.view.html",
          '<ng-include ng-controller=headerController src="\'header/header.view.html\'"></ng-include><title>{{metatags.title}}</title><meta name=description content={{metatags.description}}><div id=nswitch class={{nswitch.$value}}><img class={{nswitch.$value}} src=img/Logo.svg></div><div id=blockie class={{Dsettings.loadedie}}><div class="modernloader {{Dsettings.loaded}}" style=background-color:#fafafa></div></div><div id=project><div class=cover><img src={{theproject.Header}}></div><div class=main><span class=title ng-if="realan != \'eng\'">{{theproject.Title}}</span> <span class=title ng-if="realan == \'eng\'">{{theproject.TitleE}}</span><p ng-if="realan != \'eng\'" style="white-space: pre-wrap;">{{theproject.Description}}</p><p ng-if="realan == \'eng\'" style="white-space: pre-wrap;">{{theproject.DescriptionE}}</p></div><div ng-repeat="item in Addoniess | orderBy: \'Order\'" class="{{item.Type}} {{item.Orientation}}" style="white-space: pre-wrap;"><img ng-if="item.Type === \'imgvid\'" ng-src={{item.Src}} ng-hide="item.Type === \'imgvid\' && item.Tipo == \'video/mp4\' || item.Type === \'imgvid\' && item.Tipo == \'video/webm\'"><video ng-if="item.Type === \'imgvid\' && item.Tipo == \'video/mp4\' || item.Type === \'imgvid\' && item.Tipo == \'video/webm\'" ng-src="{{item.Src | trustUrl}}" autoplay loop muted></video><p ng-if="item.Type != \'imgvid\' && item.Type != \'embed\' && realan != \'eng\'">{{item.Src}}</p><p ng-if="item.Type != \'imgvid\' && item.Type != \'embed\' && realan == \'eng\'">{{item.SrcE}}</p><div ng-if="item.Type === \'embed\'" class=aspect-ratio ng-bind-html="item.Src | to_trusted"></div></div><div class="credits clearon"><div class=left><ul><li ng-if="realan != \'eng\'" class=title>Áreas Desarrolladas</li><li ng-if="realan == \'eng\'" class=title>Developed Areas</li><p ng-if="realan != \'eng\'" style="white-space: pre-wrap; line-height:22px;opacity:.5;">{{theproject.Areas}}</p><p ng-if="realan == \'eng\'" style="white-space: pre-wrap; line-height:22px;opacity:.5;">{{theproject.AreadE}}</p></ul></div><div class=right><ul><li ng-if="realan != \'eng\'" class=title>Información de Proyecto</li><li ng-if="realan == \'eng\'" class=title>Project Information</li><p ng-if="realan != \'eng\'" style="white-space: pre-wrap; line-height:22px;opacity:.5;">{{theproject.Credits}}</p><p ng-if="realan == \'eng\'" style="white-space: pre-wrap; line-height:22px;opacity:.5;">{{theproject.CreditsE}}</p></ul></div></div></div><div id=gfixer><div ng-if="realan != \'eng\'" class=features>Proyectos Destacados</div><div ng-if="realan == \'eng\'" class=features>Featured Projects</div><ng-include ng-controller=featuredController src="\'featured/featured.view.html\'"></ng-include></div><footer style=background-color:#fafafa><ul><li ng-if="realan == \'eng\'" class=title>Contact</li><li ng-if="realan != \'eng\'" class=title>Contacto</li><li><a href="mailto:{{ studioSettings.Newbusiness.Mail }}" target=_top>{{ studioSettings.Newbusiness.Mail }}</a></li><li><a href="tel:{{ studioSettings.Newbusiness.Phone.split(\' \').join(\'\') }}">{{ studioSettings.Newbusiness.Phone }}</a></li></ul><ul class=nosmall><li ng-if="realan == \'eng\'" class=title>Connect</li><li ng-if="realan != \'eng\'" class=title>Conectar</li><li ng-repeat="item in Connect"><a href="{{ item.Url }}">{{ item.Name }}</a></li></ul><ul class=language><li ng-if="realan == \'eng\'" class=title>Language</li><li ng-if="realan != \'eng\'" class=title>Idioma</li><li ng-if="realan == \'eng\'" ng-click=changeLangEng()>English</li><li ng-if="realan != \'eng\'" ng-click=changeLangEng()>Inglés</li><li ng-if="realan == \'eng\'" ng-click=changeLangEsp()>Spanish</li><li ng-if="realan != \'eng\'" ng-click=changeLangEsp()>Español</li></ul></footer>'
        ),
        $templateCache.put(
          "produccionid/produccionid.view.html",
          '<ng-include ng-controller=headerController src="\'header/header.view.html\'"></ng-include><title>{{metatags.title}}</title><meta name=description content={{metatags.description}}><div id=nswitch class={{nswitch.$value}}><img class={{nswitch.$value}} src=img/Logo.svg></div><div id=blockie class={{Dsettings.loadedie}}><div class="modernloader {{Dsettings.loaded}}" style=background-color:#fafafa></div></div><div id=wrapper><div id=modules><div class=top><div class="module m-02"><div class=media><img src={{theproject.Header}}></div></div><div class="module m-02"><div class="data top"><div class=date>{{theproject.dateday}} {{theproject.datemonth}} {{theproject.dateyear}}<span>Producción</span></div><div class=title>{{theproject.Name}}</div><div class=subtitle>{{theproject.Subtitle}}</div></div></div></div><div ng-repeat="item in Addoniess | orderBy: \'Order\'" class="module {{item.MediaType}} {{item.Type}}"><div ng-if="item.Type == \'m-04 paragraph\'" class=data><p>{{item.Src}}</p></div><div ng-if="item.Type == \'m-01 quote\'" class=data><div class=title>{{item.Src}}</div></div><div ng-if="item.Type == \'imgvid\'" class=media><img src={{item.Src}}></div></div></div></div><ng-include ng-controller=footerController src="\'footer/footer.view.html\'"></ng-include>'
        ),
        $templateCache.put(
          "projectssettings/projectssettings.view.html",
          `<div ng-if="realog === \'yes\'">
            <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
            <div id=login class=projects>
              <a href=/dashboard class=title>In The Park Admin</a>
              <div class=meniu>
                <div class=leftleft>
                  <a href=/dashboard>
                    <span class="material-icons">keyboard_backspace</span> Regresar</a>
                  </div>
                  <div class=centiecentie>Projects</div>
                  <div class=rightright>
                    <a href=/newproject>
                      Add Element <span class="material-icons">add_circle</span>
                    </a>
                  </div>
                </div>
                <form>
                <div id=repeater ng-repeat="item in projects | orderBy: \'Order\'" class=pblock>
                  <div class=arrows>
                    <div id={{item.$id}} class=top ng-click="upNum($event, item)">
                      <span id={{item.$id}} class="material-icons">expand_less</span>
                    </div>
                    <div id={{item.$id}} class=down ng-click="downNum($event, item)">
                      <span id={{item.$id}} class="material-icons">more</span>
                    </div>
                  </div>
                  <a href=/editproject/{{item.$id}}>{{item.Name}}</a>
                  <div class="actions">
                    <div class=delete>
                      <div style=cursor:pointer>
                        <span ng-if="item.Delete != \'Yes\'" ng-click="item.Delete = \'Yes\'" class="material-icons dno">clear</span>
                        <span ng-if="item.Delete == \'Yes\'">
                          <span id={{item.$id}} ng-click="productDelete($event, item)" class=mimune>&nbsp;Y&nbsp;</span>
                          /<span class=mimune ng-click="item.Delete = \'No\'">&nbsp;N&nbsp;</span>
                        </span>
                      </div>
                    </div>
                    <div class=viewyes>
                      <div ng-click=toggleVisible(item) style=cursor:pointer>
                        <span ng-if="item.Visible == \'On\'" class="material-icons">visibility</span>
                        <span ng-if="item.Visible == \'Off\'" class="material-icons">visibility_off</span>
                      </div>
                    </div>
                    <div class=featured>
                      <div ng-click=toggleFeatured(item) style=cursor:pointer>
                        <span ng-if="item.Featured == \'Yes\'" class="material-icons">star_border</span>
                        <span ng-if="item.Featured == \'No\'" class="material-icons">star</span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <hr>
            </div>
          </div>
          <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "studio/studio.view.html",
          '<ng-include ng-controller=headerController src="\'header/header.view.html\'"></ng-include><div id=nswitch class={{nswitch.$value}}><img class={{nswitch.$value}} src=img/Logo.svg></div><div id=blockie class={{Dsettings.loadedie}}><div class="modernloader {{Dsettings.loaded}}" style=background-color:#fafafa></div></div><div id=studio><img src={{studioSettings.Header}} class=header><div class="content clearon"><div class=left><p ng-if="realan != \'eng\'" style="white-space: pre-wrap;">{{studioSettings.About}}</p><p ng-if="realan == \'eng\'" style="white-space: pre-wrap;">{{studioSettings.AboutE}}</p><p ng-if="realan != \'eng\'" style="white-space: pre-wrap;">{{studioSettings.Clients}}</p><p ng-if="realan == \'eng\'" style="white-space: pre-wrap;">{{studioSettings.ClientsE}}</p></div><div class="right clearon"><ul class="services l"><li ng-if="realan != \'eng\'" class=title>Servicios</li><li ng-if="realan == \'eng\'" class=title>Services</li><p ng-if="realan != \'eng\'" style="white-space: pre-wrap; line-height:22px;opacity:.5;">{{ studioSettings.ServicesL }}</p><p ng-if="realan == \'eng\'" style="white-space: pre-wrap; line-height:22px;opacity:.5;">{{ studioSettings.ServicesLE }}</p></ul><ul class=services><li class=title>&nbsp;</li><p ng-if="realan != \'eng\'" style="white-space: pre-wrap; line-height:22px;opacity:.5;">{{ studioSettings.ServicesR }}</p><p ng-if="realan == \'eng\'" style="white-space: pre-wrap; line-height:22px;opacity:.5;">{{ studioSettings.ServicesRE }}</p></ul></div></div><div class="content clearon"><div class=left><ul class="services l Req"><li class=title>In the Park</li><p style="white-space: pre-wrap; line-height:22px;opacity:.5;">{{studioSettings.Address}}</p></ul></div><div class="right clearon"><ul class="services l"><li ng-if="realan != \'eng\'" class=title>Nuevos Negocios</li><li ng-if="realan == \'eng\'" class=title>New Business</li><li><a href="mailto:{{ studioSettings.Newbusiness.Mail }}" target=_top>{{ studioSettings.Newbusiness.Mail }}</a></li><li><a href="tel:{{ studioSettings.Newbusiness.Phone.split(\' \').join(\'\') }}">{{ studioSettings.Newbusiness.Phone }}</a></li></ul><ul class=services><li ng-if="realan != \'eng\'" class=title>Sitios Relacionados</li><li ng-if="realan == \'eng\'" class=title>Linked Sites</li><li ng-repeat="item in studioSettingsSocial"><a href={{item.Url}} target=_blank ng-if="$index>1">{{item.Name}}</a></li></ul></div></div></div><div class=grid><div ng-repeat="item in StudioGrid" class="thumbnail {{item.Ratio}}" ng-init=mason() custom-on-change=mason style="cursor:default !important; background-image: url({{item.Src}});"></div></div><ng-include ng-controller=footerController src="\'footer/footer.view.html\'"></ng-include>'
        ),
        $templateCache.put(
          "studiosettings/studiosettings.view.html",
          `<div ng-if="realog === \'yes\'">
            <div id=login class=projects>
              <a href=/dashboard class=title>In The Park Admin</a>
              <div class=meniu>
                <div class=leftleft>
                <a href=/dashboard>
                  <span class="material-icons">keyboard_backspace</span> Regresar
                </a>
              </div>
              <div class=centiecentie>General Settings</div>
              <div class=rightright></div>
            </div>
            <form>
              <textarea rows=4 placeholder=Acerca ng-model=studioSettings.About ng-show="lang != \'eng\'"></textarea>
              <br><br>
              <textarea rows=4 placeholder=Clientes ng-model=studioSettings.Clients ng-show="lang != \'eng\'"></textarea>
              <hr>
              <textarea ng-model=studioSettings.Address placeholder=Dirección spellcheck=false ng-show="lang != \'eng\'"></textarea>
              <input type=text ng-model=studioSettings.Newbusiness.Mail placeholder="Correo Eléctronico" spellcheck=false ng-show="lang != \'eng\'">
              <hr>
              <div class=clearon>
                <center>
                  <small>Press URLS</small>
                </center>
                <div class=left>
                  <div ng-repeat="item in sosocial">
                    <input type=text placeholder="Nombre de Sitio" ng-blur=sosocial.$save(item) ng-model=item.Name>
                    <div style=text-align:right>
                      <span>&nbsp;</span>
                    </div>
                  </div>
                </div>
                <div class=right>
                  <div ng-repeat="item in sosocial">
                    <input type=text placeholder="Url de Sitio" ng-blur=sosocial.$save(item) ng-model=item.Url>
                    <div style=text-align:right>
                      <span ng-click=DelSoc(item) class=ngremove>Remove</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style=text-align:center;>
                <label>Add new image block</label>
                <div class=plusbutton ng-click=newUrl()>
                  <span class="material-icons">photo</span>
                </div>
                <hr><hr>
              </form>
              <form>
                <button id=btnLogin ng-click=saveUrl()>Save</button>
              </form>
            </div>
          </div>
          <a href=/nosotros target=_blank class=previewpage>
            Preview Page <span class="material-icons">call_made</span>
          </a>
          <progress id=uploader class=off></progress>
          <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "newtalent/newtalent.view.html",
          `<div ng-if="realog === \'yes\'">
          <link rel=stylesheet href=css/portfolio.css>
          <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
          <div id=login>
            <a href=/dashboard class=title>In The Park Admin</a>
            <div class=meniu>
              <div class=leftleft>
                <a href=/ccctalento>
                  <span class="material-icons">keyboard_backspace</span> Regresar
                </a>
              </div>
              <div class=centiecentie>Crear Talento</div>
              <div class=rightright>&nbsp;</div>
            </div>
            <form>
              <img id=thumbie src style="width:100%; display:none">
              <input type=file id=thumb placeholder=hola style=display:none custom-on-change=uThumbnail>
              <label for=thumb>Foto de Perfil</label>
  
              <div class="input">
                <label>Nombre</label>
                <input type=text placeholder="Nombre y Apellidos" spellcheck=false ng-model=pro.Name ng-show="lang != \'eng\'">
              </div>
  
              <div class="input">
                <label>Altura</label>
                <input type=text placeholder="Ej. 1.80m" spellcheck=false ng-model=pro.Altura ng-show="lang != \'eng\'">
              </div>
              
              <div class="input">
                <label>Busto</label>
                <input type=text placeholder="Ej. 90cm" spellcheck=false ng-model=pro.Busto ng-show="lang != \'eng\'">
              </div>
              
              <div class="input">
                <label>Cintura</label>
                <input type=text placeholder="Ej. 60cm" spellcheck=false ng-model=pro.Cintura ng-show="lang != \'eng\'">
              </div>
              
              <div class="input">
                <label>Cadera</label>
                <input type=text placeholder="Ej. 90cm" spellcheck=false ng-model=pro.Cadera ng-show="lang != \'eng\'">
              </div>
  
              <div class="input">
                <label>Zapato</label>
                <input type=text placeholder="Ej. 25.5" spellcheck=false ng-model=pro.Zapato ng-show="lang != \'eng\'">
              </div>
  
              <div class="input">
                <label>Color de Cabello</label>
                <input type=text placeholder="Ej. Negro" spellcheck=false ng-model=pro.Cabello ng-show="lang != \'eng\'">
              </div>
  
              <div class="input">
                <label>Color de Ojos</label>
                <input type=text placeholder="Ej. Café claro" spellcheck=false ng-model=pro.Ojos ng-show="lang != \'eng\'">
              </div>
              
              <br><br>
              <div ng-repeat="item in pro.Addon track by $index"><hr><span class=sectit>
              <span ng-if="item.Type == \'imgvid\'">Image or Video</span>
              <span ng-if="item.Type == \'text\'">Paragraph</span>
              <span ng-if="item.Type == \'twoc\'">Two Columns</span>
              <span ng-if="item.Type == \'quote\'">Quote</span>
              <span ng-if="item.Type == \'embed\'">Embed</span></span>
              <textarea ng-show="lang != \'eng\'" ng-model=item.Src ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Escribe aquí"></textarea>
              <textarea ng-show="lang == \'eng\'" ng-model=item.SrcE ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Type here"></textarea>
              <textarea ng-model=item.Src ng-if="item.Type == \'embed\'" placeholder="Paste iframe here"></textarea>
              <img id=hollie{{$index}} style="width:100%; display:none" ng-if="item.Type == \'imgvid\'">
              <input type=file id=iv{{$index}} placeholder=hola style=display:none ng-if="item.Type == \'imgvid\'" custom-on-change=upAddonImgVid name={{$index}}>
              <label for=iv{{$index}} ng-if="item.Type == \'imgvid\'">Select Picture or Video</label>
              <div style=text-align:right>
                <span ng-click="deleteAddon($index, item)" class=ngremove>Remove</span></div>
              </div>
              <hr>
              <div style=text-align:center;>
                <label>Add new image block</label>
                <div class=plusbutton ng-click=newAddonImgVid()>
                  <span class="material-icons">photo</span>
                </div>
              </div>
              <hr>
  
              <div class="input">
                <label>Page URL</label>
                <input type=text placeholder="This will appear in your URL bar." spellcheck=false ng-model=pro.Url ng-trim=false ng-change="pro.Url = pro.Url.split(\' \').join(\'\')">
              </div>
              
              <div class="input">
                <label>Description SEO</label>
                <textarea placeholder="Type here the page's description for search engines." ng-model=pro.SeoDesc></textarea>
              </div>
              <hr>
              
              <input type=text placeholder=Instagram spellcheck=false ng-model=pro.Instagram ng-show="lang != \'eng\'">
              <hr>
              <button id=btnLogin type=submit ng-disabled="waitSave != 0" ng-click=newP()>{{buttonMgs}}</button>
              <div ng-if=errorMsg class=error>{{errorMsg}}</div>
            </form>
          </div>
          <progress id=uploader class=off></progress>
          <div class=onoffswitch>
            <input ng-model=lang ng-true-value="\'eng\'" ng-false-value="\'esp\'" type=checkbox name=onoffswitch class=onoffswitch-checkbox id=myonoffswitch checked>
            <label class=onoffswitch-label for=myonoffswitch>
              <span class=onoffswitch-inner></span>
              <span class=onoffswitch-switch></span>
            </label>
          </div>
        </div>
        <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "talento/talento.view.html",
          '<ng-include ng-controller=headerController src="\'header/header.view.html\'"></ng-include><div id=wrapper><div id=modules><div ng-repeat="item in talento | orderBy: \'Order\'" ng-if="item.Visible == \'On\'" class="module m-cast"><div class=media><a href=/talento/{{item.$id}}><img src={{item.Thumbnail}}></a></div><div class=data><a href=/talento/{{item.$id}}><div class=title>{{item.Name}}</div></a></div></div></div></div><ng-include ng-controller=footerController src="\'footer/footer.view.html\'"></ng-include>'
        ),
        $templateCache.put(
          "newproduccion/newproduccion.view.html",
          `<div ng-if="realog === \'yes\'">
            <link rel=stylesheet href=css/portfolio.css>
            <style>\n    body{\n        padding: 0px 10px;\n        margin-bottom: 0px;\n    }\n</style>
            <div id=login>
              <a href=/dashboard class=title>In The Park Admin</a>
              <div class=meniu>
                <div class=leftleft>
                  <a href=/cccproduccion>
                    <span class="material-icons">keyboard_backspace</span> Regresar
                  </a>
                </div>
                <div class=centiecentie>Crear Producción</div>
                <div class=rightright>&nbsp;</div>
              </div>
              <form>
                <img id=thumbie src="media/PlaceholderImage.jpg" style="width:100%; display:none">
                <input type=file id=thumb placeholder=hola style=display:none custom-on-change=uThumbnail>
                <label for=thumb>Thumbnail</label>
                <img id=headie src style="width:100%; display:none">
                <input type=file id=header placeholder=hola style=display:none custom-on-change=uHeader>
                <label for=header>Cover</label>
                <input type=text placeholder=Titulo spellcheck=false ng-model=pro.Name ng-show="lang != \'eng\'">
                <br><br>
                <input type=text placeholder=Subtitulo spellcheck=false ng-model=pro.Subtitle ng-show="lang != \'eng\'">
                <br><br>
                <div ng-repeat="item in pro.Addon track by $index">
                  <hr>
                  <span class=sectit>
                    <span ng-if="item.Type == \'imgvid\'">Image or Video</span>
                    <span ng-if="item.Type == \'m-04 paragraph\'">Paragraph</span>
                    <span ng-if="item.Type == \'m-01 quote\'">Quote</span>
                  </span>
                  <textarea ng-show="lang != \'eng\'" ng-model=item.Src ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Escribe aquí"></textarea>
                  <textarea ng-show="lang == \'eng\'" ng-model=item.SrcE ng-if="item.Type != \'imgvid\' && item.Type != \'embed\'" placeholder="Type here"></textarea>
                  <textarea ng-model=item.Src ng-if="item.Type == \'embed\'" placeholder="Paste iframe here"></textarea>
                  <img id=hollie{{$index}} style="width:100%; display:none" ng-if="item.Type == \'imgvid\'">
                  <input type=file id=iv{{$index}} placeholder=hola style=display:none ng-if="item.Type == \'imgvid\'" custom-on-change=upAddonImgVid name={{$index}}>
                  <label for=iv{{$index}} ng-if="item.Type == \'imgvid\'">Select Picture or Video</label>
                  <div class=halfers ng-if="item.Type == \'imgvid\'">
                    <p>Select the size of the thumbnail inside the category.</p>
                    <input ng-if="item.Type == \'imgvid\'" type=radio ng-model=item.MediaType value=m-01 id=mtfull name=horvsver checked>
                    <input ng-if="item.Type == \'imgvid\'" type=radio ng-model=item.MediaType value=m-04 id=mtcenter name=horvsver>
                    <input ng-if="item.Type == \'imgvid\'" type=radio ng-model=item.MediaType value=m-02 id=mthalf name=horvsver>
                    <input ng-if="item.Type == \'imgvid\'" type=radio ng-model=item.MediaType value=m-03 id=mtthird name=horvsver>
                    <label ng-if="item.Type == \'imgvid\'" for=mtfull class=half ng-class="{selected: item.MediaType == \'m-01\'}">Full Width</label>
                    <label ng-if="item.Type == \'imgvid\'" for=mtcenter class=half ng-class="{selected: item.MediaType == \'m-04\'}">Center</label>
                    <label ng-if="item.Type == \'imgvid\'" for=mthalf class=half ng-class="{selected: item.MediaType == \'m-02\'}">Half</label>
                    <label ng-if="item.Type == \'imgvid\'" for=mtthird class=half ng-class="{selected: item.MediaType == \'m-03\'}">Third</label>
                  </div>
                  <div style=text-align:right>
                    <span ng-click="deleteAddon($index, item)" class=ngremove>Remove</span>
                  </div>
                </div>
                <hr>
                <div style=text-align:center;>
                  <label class="labl">Add new content blocks</label>
                  <div class=plusbutton ng-click=newAddonImgVid()>
                  <span class="material-icons">photo</span>
                </div>
                <div class=plusbutton ng-click=newAddonText()>
                  <span class="material-icons">notes</span>
                </div>
                <div class=plusbutton ng-click=newAddonQuote()>
                  <span class="material-icons">format_quote</span>
                </div>
              </div>
              <hr>
  
              <div class="input">
                <label>Page URL</label>
                <input type=text placeholder="This will appear in your URL bar." spellcheck=false ng-model=pro.Url ng-trim=false ng-change="pro.Url = pro.Url.split(\' \').join(\'\')">
              </div>
  
              <div class="input">
                <label>Description SEO</label>
                <textarea placeholder="Type here the page's description for search engines." ng-model=pro.SeoDesc></textarea>
              </div>
              <hr>
              
              <div class=halfers>
                <p>Select the size of the thumbnail inside the category.</p>
                <input type=radio ng-model=pro.MediaType value=m-01 id=promtfull name=horvsver checked>
                <input type=radio ng-model=pro.MediaType value=m-04 id=promtcenter name=horvsver>
                <input type=radio ng-model=pro.MediaType value=m-02 id=promthalf name=horvsver>
                <input type=radio ng-model=pro.MediaType value=m-04 id=promtthird name=horvsver>
                <label for=promtfull class=half ng-class="{selected: pro.MediaType == \'m-01\'}">Full Width</label>
                <label for=promtcenter class=half ng-class="{selected: pro.MediaType == \'m-04\'}">Center</label>
                <label for=promthalf class=half ng-class="{selected: pro.MediaType == \'m-02\'}">Half</label>
                <label for=promtthird class=half ng-class="{selected: pro.MediaType == \'m-03\'}">Third</label>
              </div>
              <hr>
              <button id=btnLogin type=submit ng-disabled="waitSave != 0" ng-click=newP()>{{buttonMgs}}</button>
              <div ng-if=errorMsg class=error>{{errorMsg}}</div>
            </form>
          </div>
          <progress id=uploader class=off></progress>
          <div class=onoffswitch>
            <input ng-model=lang ng-true-value="\'eng\'" ng-false-value="\'esp\'" type=checkbox name=onoffswitch class=onoffswitch-checkbox id=myonoffswitch checked>
            <label class=onoffswitch-label for=myonoffswitch>
              <span class=onoffswitch-inner></span>
              <span class=onoffswitch-switch></span>
            </label>
          </div>
        </div>
        <div ng-if="realog != \'yes\'" ng-init=tologin()></div>`
        ),
        $templateCache.put(
          "nosotros/nosotros.view.html",
          `<ng-include ng-controller=headerController src="\'header/header.view.html\'"></ng-include>
          <div id=wrapper>
            <div id=modules>
              <div class="module m-04 paragraph">
                <div class="media nosotros-logo">
                  <img src=img/Logo.svg>
                </div>
                <div class=data>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                    impedit quo minus id quod maxime SUBTITLE Ut enim ad minima veniam, quis
                    nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                    commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                    velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat
                    quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos
                    ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                    et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt
                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
                    cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere</p>
                </div>
              </div>
              <div class="module m-03 nosotros nosotros-fixer">
                <div class=data>
                  <div class=title>Selected Clients</div>
                  <div class=subtitle>
                    A.P.C, Acne, Adidas, Alexander McQueen, Alyx, Balenciaga, Balmain, Barneys, Berluti,
                    BMW, Bottega Veneta, Burberry, Calvin Klein, Carhartt, Carven, Celine, Comme des Garcons,
                    COS, Diesel, Dior Homme, Dries van Noten, Ermengildo Zegna, Etro, Fendi, Givenchy,
                    Gosha Rubchinskiy, Gucci, Haider Ackermann, Hermès, Hugo Boss, J.W.Anderson, Jil Sander,
                    Junya Watanabe, Kenzo, Lacoste, Lanvin, Lemaire, Loewe, Louis Vuitton, Maison Margiela,
                    Mango, Marc Jacobs, Missoni, Moncler, Net-A-Porter, Off-White, Paul Smith, Prada,
                    Pringle of Scotland, Raf Simons, Rick Owens, Rochas, Sacai, Saint Laurent,
                    Salvatore Ferragamo, Ssense, Stella McCartney, Stephan Schneider, Stüssy, Tom Ford,
                    Tommy Hilfiger, Topman, Valentino, Versace, Vetements, Wales Bonner, Y-3, Yeezy,
                    Zara
                  </div>
                </div>
              </div>
              <div class="module m-03 nosotros">
                <div class=data>
                  <div class=title>Press</div>
                  <div class=subtitle>
                    – Eine Frage der Haltung - Monopol, October, 2019 – Model-Familie - Vogue Germany,
                    October, 2019 – Die A50« - Achtung, No 37, 2019 – The Beauty - Self Service, No 49,
                    2018 – Anders schön - Lufthansa Magazin, No 85, 2018 – Tomorrow Is Another Day - 25
                    Hours Hotel Company Companion, issue 13, 2018 – Das globale Geschäft mit der Schönheit
                    - Handelsblatt Magazin, No 3, 2017 – Tomorrow Never Dies - SSENSE, 2017 – Office People
                    - Office Magazine, Issue 07, 2017 – Bitte schön zart– - Süddeutsche Zeitung, Nr. 137,
                    2017 – Off The Road« - Vogue Italia, No 801, 2017 – Modern Mannequins - The Gentlewoman,
                    Issue 14, 2016 – At One Modeling Agency, Nonconformity Is Key - The New York Times
                    Style Magazine, 2016 – Meet the woman transforming male modelling - Dazed digital,
                    2016 – Made in Germany - Achtung, No 31, 2016 – Eye On The Street - DANSK Magazine,
                    Issue 36, AW16, 2016 – People of Interview - Interview Magazine, 2015 – Bringing
                    menswear back to the streets - Dazed Magazine, 2012
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ng-include ng-controller=footerController src="\'footer/footer.view.html\'"></ng-include>`
        ),
        $templateCache.put(
          "work/backup.html",
          '<style>\n            #blockie{\n                display: block;\n                width: 100vw;\n                height: 100vh;\n                max-height: 100vh;\n                position: fixed;\n                z-index: 10000;\n                overflow: hidden;\n                left: 0;\n                top: 0;\n            }\n            #blockie.hidie{\n                animation:fadeh 0s;\n                animation-timing-function:linear;\n                animation-delay: 2s;\n                animation-fill-mode:forwards;\n                animation-iteration-count: 1;\n                -webkit-animation-iteration-count: 1;\n                -webkit-animation:fadeh 0s;\n                -webkit-animation-timing-function:linear;\n                -webkit-animation-delay: 2s;\n                -webkit-animation-fill-mode: forwards;\n            }\n            #blockie .modernloader{\n                display: block;\n                width: 100%;\n                height: 100%;\n                position: absolute;\n                background-color: #fafafa;\n                overflow: hidden;\n                opacity: 1;\n                transition: background-color 1s ease;\n            }\n            #blockie .modernloader.true {\n                opacity: 1;\n                animation:fadeout 1s;\n                animation-timing-function:linear;\n                animation-delay: 1s;\n                animation-fill-mode:forwards;\n                animation-iteration-count: 1;\n                -webkit-animation-iteration-count: 1;\n                -webkit-animation:fadeout 1s;\n                -webkit-animation-timing-function:linear;\n                -webkit-animation-delay: 1s;\n                -webkit-animation-fill-mode: forwards;\n            }\n            .modernloader.values{\n                background-color: #fafafa;\n                content: {{Dsettings.loadedie}};\n                \n                \n            }\n</style><div id=nswitch class={{nswitch.$value}}><img class={{nswitch.$value}} src=img/Logo.svg></div><div id=blockie class={{Dsettings.loadedie}}><div class="modernloader {{Dsettings.loaded}}" style=background-color:#fafafa></div></div><div class=nosmall><div id=myP class=testo><header><span class=leef><span ng-if="realan == \'eng\'"><span ng-click=thereload() style=cursor:pointer;>Work</span></span> <span ng-if="realan != \'eng\'"><span ng-click=thereload() style=cursor:pointer;>Proyectos</span></span></span> <a href="/"><img class=logo src=img/Logo.svg></a> <span class=riig><span ng-if="realan == \'eng\'" style=float:right><a href=/studio>Studio</a></span> <span ng-if="realan != \'eng\'" style=float:right><a href=/studio>Estudio</a></span></span></header><div ng-if="realan != \'eng\'" id=filter class=apagadooo><span ng-if="FilTime != \'Open\'"><span ng-click=openfil() ng-if="filtEsp.Tags === \'\'">Todas las Disciplinas</span> <span style="cursor: default !important"><span ng-click=openfil()>{{filtEsp.Tags}}</span></span></span> <span ng-click=closefil() ng-if="FilTime == \'Open\'"><span ng-if="filtEsp.Tags != \'\'">{{ filtEsp.Tags }}</span> <span ng-if="filtEsp.Tags == \'\'">Todas las Disciplinas</span></span><ul id=filemon class=off><li ng-if="filtEsp.Tags != \'\'" ng-click="closefil(); filtEsp.Tags = \'\'">Todas las Disciplinas</li><li ng-if="filtEsp.Tags != item.Data" id={{item.Data}} ng-repeat="item in Filters" ng-click="closefil(); filtFun($event)">{{item.Data}}</li></ul></div><div ng-if="realan == \'eng\'" id=filter class=apagadooo><span ng-if="FilTime != \'Open\'"><span ng-click=openfil() ng-if="filtEsp.TagsE === \'\'">All Disciplines</span> <span style="cursor: default !important"><span ng-click=openfil()>{{filtEsp.TagsE}}</span></span></span> <span ng-click=closefilrr() ng-if="FilTime == \'Open\'"><span ng-if="filtEsp.TagsE != \'\'">{{ filtEsp.TagsE }}</span> <span ng-if="filtEsp.TagsE == \'\'">All Disciplines</span></span><ul id=filemon class=off><li ng-if="filtEsp.TagsE != \'\'" ng-click="closefilrr(); filtEsp.TagsE = \'\'">All Disciplines</li><li ng-if="filtEsp.TagsE != item.Data" id={{item.Data}} ng-repeat="item in FiltersE" ng-click="closefilrr(); filtFunE($event)">{{item.Data}}</li></ul></div></div></div><div class=nobig><ng-include ng-controller=headerController src="\'header/header.view.html\'"></ng-include><header ng-init=languageSet()><span ng-if="realan == \'eng\'"><span ng-click=thereload() style=cursor:pointer;>Work</span></span> <span ng-if="realan != \'eng\'"><span ng-click=thereload() style=cursor:pointer;>Proyectos</span></span> <a href="/"><img class=logo src=img/Logo.svg></a> <span ng-if="realan == \'eng\'" style=float:right><a href=/studio>Studio</a></span> <span ng-if="realan != \'eng\'" style=float:right><a href=/studio>Estudio</a></span></header><div id=myP><header><span class=leef><span ng-if="realan == \'eng\'"><span ng-click=thereload() style=cursor:pointer;>Work</span></span> <span ng-if="realan != \'eng\'"><span ng-click=thereload() style=cursor:pointer;>Proyectos</span></span></span> <a href="/"><img class=logo src=img/Logo.svg></a> <span class=riig><span ng-if="realan == \'eng\'" style=float:right><a href=/studio>Studio</a></span> <span ng-if="realan != \'eng\'" style=float:right><a href=/studio>Estudio</a></span></span></header></div></div><div class=nosmall><header ng-init=languageSet() style="position:absolute; box-sizing: border-box; width:100%;"><span ng-if="realan == \'eng\'"><span ng-click=thereload() style=cursor:pointer;>Work</span></span> <span ng-if="realan != \'eng\'"><span ng-click=thereload() style=cursor:pointer;>Proyectos</span></span> <a href="/"><img class=logo src=img/Logo.svg style=padding-right:160px;></a> <span ng-if="realan == \'eng\'" style="float:right; margin-right:160px;"><a href=/studio>Studio</a></span> <span ng-if="realan != \'eng\'" style="float:right; margin-right:160px;"><a href=/studio>Estudio</a></span></header><div ng-if="realan != \'eng\'" id=filter><span ng-if="FilTime != \'Open\'"><span ng-click=openfil() ng-if="filtEsp.Tags === \'\'">Todas las Disciplinas</span> <span style="cursor: default !important"><span ng-click=openfil()>{{filtEsp.Tags}}</span></span></span> <span ng-click=closefil() ng-if="FilTime == \'Open\'"><span ng-if="filtEsp.Tags != \'\'">{{ filtEsp.Tags }}</span> <span ng-if="filtEsp.Tags == \'\'">Todas las Disciplinas</span></span><ul id=fil class=off><li ng-if="filtEsp.Tags != \'\'" ng-click="closefil(); filtEsp.Tags = \'\'">Todas las Disciplinas</li><li ng-if="filtEsp.Tags != item.Data" id={{item.Data}} ng-repeat="item in Filters" ng-click="closefil(); filtFun($event)">{{item.Data}}</li></ul></div><div ng-if="realan == \'eng\'" id=filter><span ng-if="FilTime != \'Open\'"><span ng-click=openfil() ng-if="filtEsp.TagsE === \'\'">All Disciplines</span> <span style="cursor: default !important"><span ng-click=openfil()>{{filtEsp.TagsE}}</span></span></span> <span ng-click=closefilrr() ng-if="FilTime == \'Open\'"><span ng-if="filtEsp.TagsE != \'\'">{{ filtEsp.TagsE }}</span> <span ng-if="filtEsp.TagsE == \'\'">All Disciplines</span></span><ul id=fil class=off><li ng-if="filtEsp.TagsE != \'\'" ng-click="closefilrr(); filtEsp.TagsE = \'\'">All Disciplines</li><li ng-if="filtEsp.TagsE != item.Data" id={{item.Data}} ng-repeat="item in FiltersE" ng-click="closefilrr(); filtFunE($event)">{{item.Data}}</li></ul></div></div><div class="grid cincuentados"><a ng-repeat="item in projects | filter:filtEsp | orderBy: \'Order\'" ng-if="item.Visible == \'On\'" href=/project/{{item.$id}} class="thumbnail {{item.Settings.Ratio}}" ng-init=mason() custom-on-change=mason style="background-image: url({{item.Thumbnail}});"><div class=thover><div class=ttop><span class=commm ng-if="realan != \'eng\'"><div class=namiel>{{item.Name}}</div><div class=tagiel>{{item.Tags}}</div></span> <span class=commm ng-if="realan == \'eng\'"><div class=namiel>{{item.NameE}}</div><div class=tagiel>{{item.TagsE}}</div></span></div></div></a></div><ng-include ng-controller=footerController src="\'footer/footer.view.html\'"></ng-include>'
        ),
        $templateCache.put(
          "work/work.view.html",
          '<style>\n    #headerid.stepzeropointfive{\n        position: fixed;\n        margin-top: -260px;\n    }\n    #headerid.stepone{\n        position: fixed;\n        margin-top: -260px;\n        transition: margin-top .70s ease;\n    }\n</style><ng-include ng-controller=headerController src="\'header/header.view.html\'"></ng-include><div class="grid cincuentados"><a ng-repeat="item in projects | filter:filtEsp | orderBy: \'Order\'" ng-if="item.Visible == \'On\'" href=/project/{{item.$id}} class="thumbnail {{item.Settings.Ratio}}" ng-init=mason() custom-on-change=mason style="background-image: url({{item.Thumbnail}});"><div class=thover><div class=ttop><span class=commm ng-if="realan != \'eng\'"><div class=namiel>{{item.Name}}</div><div class=tagiel>{{item.Tags}}</div></span> <span class=commm ng-if="realan == \'eng\'"><div class=namiel>{{item.NameE}}</div><div class=tagiel>{{item.TagsE}}</div></span></div></div></a></div><ng-include ng-controller=footerController src="\'footer/footer.view.html\'"></ng-include>'
        ),
        $templateCache.put(
          "banner/banner.view.html",
          '<style>\n            #blockie{\n                display: block;\n                width: 100vw;\n                height: 100vh;\n                max-height: 100vh;\n                position: fixed;\n                z-index: 10000;\n                overflow: hidden;\n                left: 0;\n                top: 0;\n            }\n            #blockie.hidie{\n                animation:fadeh 0s;\n                animation-timing-function:linear;\n                animation-delay: 2s;\n                animation-fill-mode:forwards;\n                animation-iteration-count: 1;\n                -webkit-animation-iteration-count: 1;\n                -webkit-animation:fadeh 0s;\n                -webkit-animation-timing-function:linear;\n                -webkit-animation-delay: 2s;\n                -webkit-animation-fill-mode: forwards;\n            }\n            #blockie .modernloader{\n                display: block;\n                width: 100%;\n                height: 100%;\n                position: absolute;\n                background-color: #fafafa;\n                overflow: hidden;\n                opacity: 1;\n                transition: background-color 1s ease;\n            }\n            #blockie .modernloader.true {\n                opacity: 1;\n                animation:fadeout 1s;\n                animation-timing-function:linear;\n                animation-delay: 1s;\n                animation-fill-mode:forwards;\n                animation-iteration-count: 1;\n                -webkit-animation-iteration-count: 1;\n                -webkit-animation:fadeout 1s;\n                -webkit-animation-timing-function:linear;\n                -webkit-animation-delay: 1s;\n                -webkit-animation-fill-mode: forwards;\n            }\n            .modernloader.values{\n                background-color: #fafafa;\n                content: {{Dsettings.loadedie}};\n            }\n    \n    .thisisdead{\n        opacity: 0;\n        transition: opacity ease .30s;\n    }\n    .thisisdead.hidie{\n        opacity: 1;\n        transition: opacity ease .30s;\n        transition-delay: .25s;\n    }\n    \n    \n     * {\n      box-sizing: border-box;\n    }\n\n    \n    \n</style><div id=blockie class={{Dsettings.loadedie}}><div class="modernloader {{Dsettings.loaded}}" style=background-color:#fafafa></div></div><style>\n/* Dots */\n.slick-dotted.slick-slider\n{\n    margin-bottom: 30px;\n}\n\n.slick-dots\n{\n    position: absolute;\n    bottom: 10px;\n\n    display: block;\n\n    width: 100%;\n    padding: 0;\n    margin: 0;\n\n    list-style: none;\n\n    text-align: center;\n}\n.slick-dots li\n{\n    position: relative;\n\n    display: inline-block;\n\n    width: 20px;\n    height: 20px;\n    margin: 0 5px;\n    padding: 0;\n\n    cursor: pointer;\n}\n.slick-dots li button\n{\n    font-size: 0;\n    line-height: 0;\n\n    display: block;\n\n    width: 20px;\n    height: 20px;\n    padding: 5px;\n\n    cursor: pointer;\n\n    color: transparent;\n    border: 0;\n    outline: none;\n    background: transparent;\n}\n.slick-dots li button:hover,\n.slick-dots li button:focus\n{\n    outline: none;\n}\n.slick-dots li button:hover:before,\n.slick-dots li button:focus:before\n{\n    opacity: 1;\n}\n.slick-dots li button:before\n{\n    font-family: \'slick\';\n    font-size: 10px;\n    line-height: 20px;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 20px;\n    height: 20px;\n\n    content: \'•\';\n    text-align: center;\n\n    opacity: .5;\n    color: white;\n\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.slick-dots li.slick-active button:before\n{\n    opacity: 1;\n    color: white;\n}\n</style><style>\n    .slick-dotted.slick-slider{\n        margin-bottom: 0px;\n        \n    }\n</style><section class="regular slider thisisdead {{Dsettings.loadedie}}"><a ng-repeat="item in banner" ng-href={{item[0].Url}} style="background-image: url({{item[0].Src}})"><div><span ng-if="realan == \'eng\'" class=happytriggerhavoc>{{item[0].CopyE}}</span> <span ng-if="realan != \'eng\'" class=happytriggerhavoc>{{item[0].Copy}}</span></div></a></section>'
        ),
        $templateCache.put(
          "talentoid/talentoid.view.html",
          '<ng-include ng-controller=headerController src="\'header/header.view.html\'"></ng-include><title>{{metatags.title}}</title><meta name=description content={{metatags.description}}><div id=nswitch class={{nswitch.$value}}><img class={{nswitch.$value}} src=img/Logo.svg></div><div id=blockie class={{Dsettings.loadedie}}><div class="modernloader {{Dsettings.loaded}}" style=background-color:#fafafa></div></div><div id=wrapper><div id=talento><div class=left><img ng-repeat="item in Addoniess | orderBy: \'Order\'" ng-src={{item.Src}}></div><div class=right><div class=data><div class=name>{{theproject.Name}}</div><div class=type>Modelo</div><div class=facts><br><br><div>Altura<span>{{theproject.Altura}}</span></div><div>Busto<span>{{theproject.Busto}}</span></div><div>Cintura<span>{{theproject.Cintura}}</span></div><div>Cadera<span>{{theproject.Cadera}}</span></div><div>Zapato<span>{{theproject.Zapato}}</span></div><div>Cabello {{theproject.Cabello}}</div><div>Ojos {{theproject.Ojos}}</div><br><br></div><div class=instagram><a href=https://instagram.com/{{theproject.Instagram}}>{{theproject.Instagram}}</a></div></div></div></div></div><ng-include ng-controller=footerController src="\'footer/footer.view.html\'"></ng-include>'
        ),
        $templateCache.put(
          "mainMenu.tile.html",
          '<script type=text/ng-template id=recursiveMenu.tile.html><a class="dropdown-toggle" data-toggle="dropdown" ng-href="{{item.path}}" role="button" aria-expanded="false" ng-class="{dropdown : item.submenu}">{{item.menu.content}} <span class="caret" ng-show="item.submenu"></span></a> <ul ng-if="item.submenu" class="dropdown-menu"> <li ng-repeat="item in item.submenu" ng-include="\'recursiveMenu.tile.html\'" ng-class="{active : ($route.current.loadedTemplateUrl == item.options.templateUrl) || activar}"> </li> </ul></script><ul class="nav navbar-nav"><li ng-repeat="item in content" ng-include="\'recursiveMenu.tile.html\'" ng-class="{active : ($route.current.loadedTemplateUrl == item.options.templateUrl) || activar}"></li></ul>'
        ),
        $templateCache.put("nav-top.tile.html", '<li ng-repeat="item in $parent.menus" ng-class="{active : $route.current.loadedTemplateUrl == item.options.templateUrl}"><a href=#{{item.path}}>{{item.menu.content}}</a></li>'),
        $templateCache.put("rotulaciones-perfil.tile.html", "");
    },
  ]);