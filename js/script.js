document.addEventListener('DOMContentLoaded', function(event) {	
	const menuItems = document.querySelectorAll('.menu__item.hassubmenu');
  setTimeout(() => {
		if(menuItems){
			menuItems.forEach((menuItem) => {
			  const menuList = document.querySelector('.menu__list');
			  const menuListRect = menuList.getBoundingClientRect();
			  const menuItemRect = menuItem.getBoundingClientRect();
			  const leftPosition = menuItemRect.left - menuListRect.left + menuItemRect.width / 2;
			  const submenuImg = menuItem.querySelector('.ssw-submenu > img');
			  if (submenuImg) {
			    submenuImg.style.left = `${leftPosition}px`;
			  }
			});		
		}
  }, 100);

	function handleScroll() {
		var header = document.querySelector('.header');
		var scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (scroll > 1) {
      header.classList.add('show');
    } else {
      header.classList.remove('show');
    }
	}
	handleScroll();
	window.addEventListener('scroll', handleScroll);
	var headerBurger = document.querySelectorAll('.header__burger');
	var header = document.querySelector('.header');
	var body = document.querySelector('body');
	var menuLinks = document.querySelectorAll('.menu__link');
	var menu = document.querySelectorAll('.menu');
	if(headerBurger){
		headerBurger.forEach(function(headerBurger){
			headerBurger.addEventListener('click', function(event){
				header.classList.toggle('active');
				headerBurger.classList.toggle('active');
				menu.forEach(function(menu){
					menu.classList.toggle('active');
				})
				body.classList.toggle('lock');
			})
		});
	}
	if(menuLinks){
		menuLinks.forEach(function(menuLinks){
			menuLinks.addEventListener('click', function(event){
				menuLinks.parentNode.classList.toggle('active');
				if(menuLinks.parentNode.querySelector('ul')){
					menuLinks.parentNode.querySelector('ul').classList.toggle('show');
				}
				
			})
		});
	}

	var dataPopup = document.querySelectorAll('[data-topopup]');
	if(dataPopup){
		dataPopup.forEach(function(dataPopup){
			dataPopup.addEventListener('click', function(event){
				event.preventDefault();
				var dataContent = document.getElementById(this.getAttribute('data-topopup'));
				if(dataContent){
					dataContent.classList.add('opened');
					body.classList.add('lockPopup');
				}
			})
		});
	}

	var popupClose = document.querySelectorAll('.popup__close');
	if(popupClose){
		popupClose.forEach(function(popupClose){
			popupClose.addEventListener('click', function(event){
				var popupBlock = this.closest('.popup');
				if(popupBlock){
					popupBlock.classList.remove('opened');
					body.classList.remove('lockPopup');
				}
			})
		});
	}
	var profileUserWrap = document.querySelectorAll('.header__profile-user');
	var profileUser = document.querySelectorAll('.header__profile-user>a');
	if(profileUser){
		profileUser.forEach(function(profileUser){
			profileUser.addEventListener('click', function(event){
				event.preventDefault();
				var profileMenu = this.nextElementSibling;
				if(profileMenu){
					profileMenu.classList.toggle('opened');
				}
			})
		});
		document.addEventListener('click', function(event) {
			profileUserWrap.forEach(function(profileUserWrap){
			  if (!profileUserWrap.contains(event.target) && profileUserWrap.querySelector('ul.opened')) {
						profileUserWrap.querySelector('.opened').classList.remove('opened');
			  }	  
			});
		});

	}
	var tabsItems = document.querySelectorAll('[data-tabs]');
	if(tabsItems){
		tabsItems.forEach(function(tabsItem) {
		    tabsItem.addEventListener('mouseenter', function(event) {
			    var tabParent = this.closest('.tabs');
			    var tabActive = tabParent.querySelector('[data-tabs].active');
			    var contentActive = tabParent.querySelector('[data-contents].target');
			    if (tabActive) {
			        tabActive.classList.remove('active');
			    }
			    if (contentActive) {
			        contentActive.classList.remove('target');
			    }
			    this.classList.add('active');
			    const tabContent = this.getAttribute("data-tabs");
			    const tabId = tabParent.querySelector(`[data-contents="${tabContent}"]`);
			    if (tabId !== null) {
			        tabId.classList.add("target");
			    }
		    });
		});
	}
	var submenu__item = document.querySelectorAll('.menu__item>a');
	if(submenu__item){
		submenu__item.forEach(function(submenu__item) {
		  	submenu__item.addEventListener('click', function(event) {
		  		event.preventDefault();
		  		submenu__item.parentNode.classList.toggle('open');
		  	});
		});	
	}
	var submenu__left = document.querySelectorAll('.ssw-submenu__left>a[data-tabs]');
	if(submenu__left){
		submenu__left.forEach(function(submenu__left) {
		  	submenu__left.addEventListener('click', function(event) {
		  		event.preventDefault();
		  		submenu__left.classList.toggle('open');
		  	});
		});	
	}



  if(document.querySelector('.main .swiper')){
      new Swiper('.main .swiper', {
        speed: 600,
        spaceBetween: 12,
        loop:true,
        slidesPerView: 1,
				autoplay: {
				    disableOnInteraction: false,
				    pauseOnMouseEnter: true,
				},
	      pagination: {
	        el: '.main .swiper-pagination',	
	      },
			  navigation: {
			    nextEl: '.main-next',
			    prevEl: '.main-prev',
			  },

      });
   }
	const cards = document.querySelectorAll('.offers__card');
	if(cards){
		cards.forEach(card => {
		  card.addEventListener('mouseenter', () => {
		    const information = card.querySelector('.offers__info');
		    const offersWrapper = card.querySelector('.offers__wrapper');
		    const offersTags = card.querySelector('.offers__tags');
		    card.classList.add('active');
		    const height = information.clientHeight - offersTags.clientHeight;
		    offersWrapper.style.top = `-${height}px`;
		  });
		  card.addEventListener('mouseleave', () => {
		    const information = card.querySelector('.offers__info');
		    const offersWrapper = card.querySelector('.offers__wrapper');
		    card.classList.remove('active');
		    offersWrapper.style.top = '0';
		  });
		});		
	}
	var offersMore = document.querySelectorAll('.offers__more');
	if(offersMore){
		offersMore.forEach(function(offersMore){
			offersMore.addEventListener('click', function(event){
				event.preventDefault();
				var offersHiddenCard = this.closest('.offers__body').querySelectorAll('.offers__card.hidden');
				if(offersHiddenCard){
					offersHiddenCard.forEach(function(offersHide){
						offersHide.classList.remove('hidden');
					});					
				}
				this.remove();
			});
		});
	}

	var magazineMore = document.querySelectorAll('.magazine__more');
	if(magazineMore){
		magazineMore.forEach(function(magazineMore){
			magazineMore.addEventListener('click', function(event){
				event.preventDefault();
				var magazineHiddenCard = document.querySelectorAll('.magazine__card.hidden');
				if(magazineHiddenCard){
					magazineHiddenCard.forEach(function(magazineHiddenCard){
						magazineHiddenCard.classList.remove('hidden');
					});					
				}
				this.remove();
			});
		});
	}

  if(document.querySelector('.reviews__cards')){
      new Swiper('.reviews__cards', {
        speed: 600,
        spaceBetween: 24,
        loop:true,
        slidesPerView: 1,
			  navigation: {
			    nextEl: '.reviews-next',
			    prevEl: '.reviews-prev',
			  },

		    breakpoints: {
		        951: {
		        	slidesPerView: 2,
		        },	        
		    }

      });
   }
	var tabsItems = document.querySelectorAll('[data-tab]');
	if(tabsItems){
		tabsItems.forEach(function(tabsItem) {
		    tabsItem.addEventListener('click', function(event) {
				    event.preventDefault();
				    var tabParent = this.closest('.tabs');
				    var tabActive = tabParent.querySelector('[data-tab].active');
				    var contentActive = tabParent.querySelectorAll('[data-content].target');
				    if (tabActive) {
				        tabActive.classList.remove('active');
				    }
						contentActive.forEach(function(contentActive){
						  if (contentActive) {
								contentActive.classList.remove('target');
						  }	  
						});
				    this.classList.add('active');
				    const tabContent = this.getAttribute("data-tab");
				    const tabId = tabParent.querySelectorAll(`[data-content="${tabContent}"]`);
						tabId.forEach(function(tabId){
						  if (tabId) {
								tabId.classList.add('target');
						  }	  
						});
		    });
		});
	}


	const input = document.querySelector('#location-search');
	if (input) {
	  const datalist = document.querySelector('.popup__list');
	  const links = datalist.querySelectorAll('a');
	  function filterLinks(searchTerm) {
	    links.forEach(link => {
	      const text = link.textContent.toLowerCase();
	      if (text.includes(searchTerm)) {
	        link.classList.add('show');
	      } else {
	        link.classList.remove('show');
	      }
	    });
	  }
	  input.addEventListener('focus', () => {
	    datalist.classList.add('open');
	    links.forEach(link => link.classList.add('show'));
	  });
	  input.addEventListener('input', () => {
	    const searchTerm = input.value.trim().toLowerCase();
	    filterLinks(searchTerm);
	  });
	  input.addEventListener('blur', () => {
	    setTimeout(() => {
	      datalist.classList.remove('open');
	    }, 100);
	  });
	  links.forEach(link => {
	    link.addEventListener('click', (e) => {
	      e.preventDefault(); 
	      input.value = link.textContent;
	      datalist.classList.remove('open');
	      links.forEach(link => link.classList.remove('show'));
	    });
	  });
	}



});