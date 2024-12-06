
        document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.querySelector("#menu-checkbox");
            // const menu = document.querySelector(".mobileHeader .main-sel");
            const menu = document.querySelector(".main-sel");

            // 點擊漢堡選單，切換主選單顯示跟隱藏
            menuToggle.addEventListener("click", () => {
                // alert(menu)
                menu.classList.toggle("active");

                document.querySelectorAll('.main-sel ol.visible').forEach(openOl => {
                openOl.classList.remove('visible');
                });
            });




            // 點擊主選單以外的區域收合主選單
            document.addEventListener("click", (a) => {
                if (!menu.contains(a.target) && !menuToggle.contains(a.target)) {
                    // menu.classList.remove("active")
                    $('.menu').removeClass('active')

                    // document.querySelectorAll('.main-sel ol.visible').forEach(openOl => {
                    // openOl.classList.remove('visible'); 
                    // });


                }

            });

            // ESC收合主選單
            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    // menu.classList.remove("active");
                    $('.menu').removeClass('active')

                    // document.querySelectorAll('.main-sel ol.visible').forEach(openOl => {
                    // openOl.classList.remove('visible');
                    // });
                    
                }
            })

            
            menu.addEventListener('click', (event) => {


            // 檢查點擊的是否為 .fa-solid
            const target = event.target;
            if (target.classList.contains('fa-solid')) {
            const parentLi = target.closest('.title') // 找到最近的 父層li
                

            const ol = parentLi.querySelector('ol') // 找到相對應的 ol
                

            if (ol) {
                // 關閉所有開啟的子選單
                document.querySelectorAll('.main-sel ol.visible').forEach(openOl => {
                    if (openOl !== ol) openOl.classList.remove('visible')
                })
                

                // 開啟相對應的子選單
                ol.classList.toggle('visible')
                }
            }
        })  

    })


    // $(document).ready(function(){
    //     $(`.main-sel .title > i`).click(function(){
    //         $(`.main-sel .title ol`).toggle();
    //     })
    // })

