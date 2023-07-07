setTimeout(() => {
    const justCalmTitleText = document.querySelector(".product__title");
    const headingPrice = document.createElement("div");
    justCalmTitleText.appendChild(headingPrice);
  
    const VarientsContainer = document.querySelector("variant-radios");
    const skioContainers = document.querySelectorAll(".skio-group-container");
    const priceRegex = /\$([\d.]+)/;
  
    let otpPrice = VarientsContainer
      ? skioContainers[2].querySelector(".price-span")
      : skioContainers[1].querySelector(".price-span");
    const priceValue = (otpPrice.textContent.trim().match(priceRegex) || [])[1];
    const priceText = skioContainers[0].querySelector(".price-span").textContent;
  
    headingPrice.innerHTML = `<span class="before"> $${priceValue || ""} </span><span class="after"> ${priceText} </span>`;
  
    skioContainers.forEach((container, index) => {
      container.addEventListener("click", function (e) {
        if (VarientsContainer && index === 2) {
          otpPrice = container.querySelector(".price-span");
          const priceValue = (otpPrice.textContent.trim().match(priceRegex) || [])[1];
          headingPrice.innerHTML = `<span class="after"> $${priceValue || ""} </span>`;
        } else if (index === 1) {
          if (VarientsContainer) {
            const priceText = container.querySelector(".price-span").textContent;
            headingPrice.innerHTML = `<span class="before"> $${priceValue || ""} </span><span class="after"> ${priceText} </span>`;
          } else {
            headingPrice.innerHTML = `<span class="after"> $${priceValue || ""} </span>`;
          }
        } else {
          const priceText = container.querySelector(".price-span").textContent;
          headingPrice.innerHTML = `<span class="before"> $${priceValue || ""} </span><span class="after"> ${priceText} </span>`;
        }
      });
    });
    
  
  
  
    if (VarientsContainer !== null) {
        const productInfoContainer = document.querySelector(".product__info-container");
        const purchaseSection = document.querySelector(".skio-plan-picker");
        const selectSizeContainer = document.createElement("div");
        const selectSizeHeading = document.createElement("p");
        selectSizeContainer.classList.add("variants-heading");
        selectSizeHeading.textContent = "SELECT SIZE:";
        selectSizeContainer.appendChild(selectSizeHeading);
        selectSizeContainer.appendChild(VarientsContainer);
        productInfoContainer.insertBefore(selectSizeContainer, purchaseSection);
        const variantBtns = VarientsContainer.querySelectorAll("label");
      
        variantBtns.forEach((variantBtn, index) => {
          if (index === 0) {
            variantBtn.textContent = "30 CAPSULES";
          } else if (index === 1) {
            variantBtn.textContent = "90 CAPSULES";
          }
      
          variantBtn.addEventListener("click", function (e) {
            setTimeout(() => {
              const priceContent = document.querySelector(".product-form__submit span").textContent;
              const price = document.querySelector(".product-form__submit span");
              const priceTextOtp = price.textContent.trim();
              const priceRegex = /\$([\d.]+)/;
              const match = priceTextOtp.match(priceRegex);
              const priceValue = match ? match[1] : "";
              const priceValueNum = parseFloat(priceValue);
              const priceSub = priceValueNum + 5.0;
      
              if (!priceContent.includes("Subscribe")) {
                headingPrice.innerHTML = `<span class="after"> $${priceValue} </span>`;
              } else {
                headingPrice.innerHTML = `<span class="before"> $${priceSub} </span>  <span class="after"> $${priceValue} </span>`;
              }
      
              const before = document.querySelector(".before");
              const otpPriceUpdate = document.querySelector(".skio-onetime-group-title");
              const subPriceUpdate = document.querySelector(".skio-onetime-group-title");
              const after = document.querySelector(".after");
              const afterNumContent = after.textContent.trim();
              const priceRegexx = /\$([\d.]+)/;
              const matchh = afterNumContent.match(priceRegexx);
              const afterNumValue = matchh ? matchh[1] : "";
              const afterNumValueFloat = parseFloat(afterNumValue);
      
              if (!priceContent.includes("Subscribe")) {
                otpPriceUpdate.querySelector(".price-span").innerHTML = `$${priceValue}+ $7.99 <span class="shipping-text"> (shipping)</span>`;
              } else {
                otpPriceUpdate.querySelector(".price-span").innerHTML = `$${priceValueNum + 5.0}+ $7.99 <span class="shipping-text"> (shipping)</span>`;
                
                const beforeText = document.querySelector(".before").textContent.trim();
                
                if (e.target.textContent.includes("30")) {
                  const subPriceUpdate = skioContainers[0].querySelector(".skio-group-title");
                  subPriceUpdate.querySelector(".price-span").innerHTML = `$${priceValue}`;
                } else {
                  const subPriceUpdate = skioContainers[1].querySelector(".skio-group-title");
                  subPriceUpdate.querySelector(".price-span").innerHTML = `$${priceValue}`;
                }
              }
            }, 100);
          });
        });
      }
  
  // Select the parent element
  var parentElement = document.querySelector('.skio-selected-purchase-option');
  
  // Get the text node containing the text "Purchase"
  var textNode = parentElement.firstChild;
  
  // Create a new text node with the updated text
  var newText = document.createTextNode("Select Purchase:");
  
  // Replace the existing text node with the new text node
  parentElement.replaceChild(newText, textNode);
  
  function setSubsConatiner(i){
  const svgIconNew = document.createElement("div");
    svgIconNew.classList.add("radio-select-new");
    
    svgIconNew.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" id="calendar-icon" width="21.027" height="21.078" viewBox="0 0 21.027 21.078">
        <path id="Path_70167" data-name="Path 70167" d="M0,0H17.434V17.434H0Z" fill="none"/>
        <g id="Ellipse_484" data-name="Ellipse 484" transform="translate(0.027 0.078)" fill="#fff" stroke="#c70072" stroke-width="1.5">
          <circle cx="10.5" cy="10.5" r="10.5" stroke="none"/>
          <circle cx="10.5" cy="10.5" r="9.75" fill="none"/>
        </g>
        <g id="Ellipse_485" data-name="Ellipse 485" transform="translate(4.027 4.078)" fill="#c70072" stroke="#c70072" stroke-width="1">
          <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
          <circle cx="6.5" cy="6.5" r="6" fill="none"/>
        </g>
      </svg>
    `;
       
      const deliveryMonth=skioContainers[i].querySelector(".skio-frequency-wrapper");
  const skioGroupSubscription=skioContainers[i].querySelector(".skio-group-content-selected");
  const list=skioGroupSubscription.querySelector("ul");
  const listItem=document.createElement("li");
  
      const deliveryNew=document.createElement("div");
      deliveryNew.classList.add("skio-frequency-wrapper");
  const avalibleOptions=document.createElement("option");
  
  deliveryNew.innerHTML=`<span class="delivery-frequency">Delivery every</span>`;
  skioGroupSubscription.prepend(deliveryNew);
  
  
  const selectOptionsOld=skioContainers[i].querySelector(".skio-frequency");
  
  
  deliveryNew.appendChild(selectOptionsOld);
  deliveryMonth.innerHTML="";
      
      const perCapsulepriceWrrapper=document.createElement("div");
      perCapsulepriceWrrapper.classList.add("price-container-new");
      const price=skioContainers[i].querySelector(".price-span");
      const pricePerCapsule=document.querySelector(".per-capsule-sub-price span");
      
        const pricePerCapsuleSpan=document.createElement("span");
        pricePerCapsuleSpan.classList.add("price-per-capsule");
        pricePerCapsuleSpan.textContent=pricePerCapsule.textContent;
     
            const PricePerCapsuleSpanParentDiv=document.createElement("div");
         PricePerCapsuleSpanParentDiv.appendChild(pricePerCapsuleSpan);
         PricePerCapsuleSpanParentDiv.classList.add("per-capsule-sub-price");
      perCapsulepriceWrrapper.appendChild(price);
      perCapsulepriceWrrapper.appendChild(PricePerCapsuleSpanParentDiv);
  
      
    const skioTitle=skioContainers[i].querySelector(".skio-group-title");
      skioTitle.textContent="Subscribe & Save $5.00";
      skioTitle.appendChild(perCapsulepriceWrrapper);
      skioTitle.prepend(svgIconNew);
      
      
      
      const subContent=skioContainers[i].querySelector(".skio-group-content-selected");
      
      const detailsConatiner=document.createElement("div");
    
      
      
      detailsConatiner.innerHTML=` <span class="sub-details-popup">See Subscription Details <svg xmlns="http://www.w3.org/2000/svg" width="14.162" height="14.162" viewBox="0 0 14.162 14.162">
    <g id="info" transform="translate(-0.5 -0.5)">
      <path id="Path_70958" data-name="Path 70958" d="M7.581.5a7.081,7.081,0,1,0,7.081,7.081A7.089,7.089,0,0,0,7.581.5Zm0,12.792a5.711,5.711,0,1,1,5.711-5.711A5.717,5.717,0,0,1,7.581,13.292Z" transform="translate(0 0)" fill="#8a8a8a"/>
      <path id="Path_70959" data-name="Path 70959" d="M15.185,8.779a.685.685,0,0,0-.685.685v5.059a.685.685,0,0,0,1.371,0V9.464A.685.685,0,0,0,15.185,8.779Zm0-1.953a.685.685,0,0,0-.685.685v0a.677.677,0,1,0,.685-.688Z" transform="translate(-7.604 -3.436)" fill="#8a8a8a"/>
    </g>
  </svg></span>`;
      
      subContent.appendChild(detailsConatiner);
 
      
      listItem.innerHTML=`<span class="discount-info">$5 off every order</span>`;
  list.prepend(listItem);
  }
    function setOtpContainer(i)
      {
        const svgIconNew = document.createElement("div");
    svgIconNew.classList.add("radio-select-new");
    
    svgIconNew.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" id="calendar-icon" width="21.027" height="21.078" viewBox="0 0 21.027 21.078">
        <path id="Path_70167" data-name="Path 70167" d="M0,0H17.434V17.434H0Z" fill="none"/>
        <g id="Ellipse_484" data-name="Ellipse 484" transform="translate(0.027 0.078)" fill="#fff" stroke="#c70072" stroke-width="1.5">
          <circle cx="10.5" cy="10.5" r="10.5" stroke="none"/>
          <circle cx="10.5" cy="10.5" r="9.75" fill="none"/>
        </g>
        <g id="Ellipse_485" data-name="Ellipse 485" transform="translate(4.027 4.078)" fill="#c70072" stroke="#c70072" stroke-width="1">
          <circle cx="6.5" cy="6.5" r="6.5" stroke="none"/>
          <circle cx="6.5" cy="6.5" r="6" fill="none"/>
        </g>
      </svg>
    `;
                const perCapsulepriceWrrapper=document.createElement("div");
          perCapsulepriceWrrapper.classList.add("price-container-new");
      const price=skioContainers[i].querySelector(".price-span");
         const priceContent=skioContainers[i].querySelector(".price-span");
          const priceTextOtp = priceContent.textContent.trim();
    const priceRegex = /\$([\d.]+)/;
    const match = priceTextOtp.match(priceRegex);
    const priceValue = match ? match[1] : "";
         price.innerHTML=`$${priceValue}+ $7.99 <span class="shipping-text"> (shipping)</span>`;
      const pricePerCapsule=document.querySelector(".per-capsule-otp-price span");
     
        const pricePerCapsuleSpan=document.createElement("span");
        pricePerCapsuleSpan.classList.add("price-per-capsule");
        pricePerCapsuleSpan.textContent=pricePerCapsule.textContent;
            const PricePerCapsuleSpanParentDiv=document.createElement("div");
         PricePerCapsuleSpanParentDiv.appendChild(pricePerCapsuleSpan);
         PricePerCapsuleSpanParentDiv.classList.add("per-capsule-otp-price");
      perCapsulepriceWrrapper.appendChild(price);
      perCapsulepriceWrrapper.appendChild(PricePerCapsuleSpanParentDiv);
         
           const skioTitle=skioContainers[i].querySelector(".skio-onetime-group-title");
         
      skioTitle.appendChild(perCapsulepriceWrrapper);
         
         skioTitle.prepend(svgIconNew);
      }
    
  for(let i=0;i<skioContainers.length;i++)
  {
     
  
  if(VarientsContainer)
  {
  
    //const parentElement = skioContainers[i].querySelector(".skio-group-title");
    //parentElement.prepend(svgIconNew);
    if(i==0 || i==1)
    {
   setSubsConatiner(i);
      
    }
  
    
    if(i==2)
       {
  setOtpContainer(i);
       }
  
      if(i==skioContainers.length-1)
      {
  // document.querySelector(".price-per-capsule-container").remove();
  }
    }
    else{
    if(i==0)
    {
  setSubsConatiner(i);
      
    }
      if(i==1)
      {
  setOtpContainer(i);
        
      }
  
  }
  }
  
  const subDEtailsMobileView=document.querySelector(".sub-details-popup");
    subDEtailsMobileView.addEventListener('click',function(){
    const popUp=document.querySelector(".skio-frequency-wrapper + ul");
      
      popUp.classList.toggle("skio-frequency-wrapper-ul-display");
    });
    
   
    
    
    
    
  },300);