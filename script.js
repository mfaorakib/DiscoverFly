            function subtotal()
            {
                const fticketCount = document.getElementById("bookingNumber");
                const fticketNewcount = parseInt(fticketCount.value);

                const eticketCount = document.getElementById("ebookingNumber");
                const eticketNewcount = parseInt(eticketCount.value);
                const subtotalPrice = fticketNewcount*150 + eticketNewcount*100;
                document.getElementById("netPrice").innerText = '$'+subtotalPrice;
                let totaltax = subtotalPrice* .10;
                document.getElementById("taxCharge").innerText = '$'+totaltax;
                let total = subtotalPrice+totaltax;
                document.getElementById("total").innerText = '$'+total;  

            }
            //economy class booking handler 
            function economyClassHandler(increase) 
                {
                const bookingnumber = document.getElementById("ebookingNumber");
                const bookingCount = parseInt(bookingnumber.value);
                let bookingNewCount = 0;
                if(increase==true){
                bookingNewCount = bookingCount + 1;
                }
                if(increase == false && bookingCount>0){
                bookingNewCount = bookingCount - 1;
                }
                ebookingNumber.value = bookingNewCount;   
                const nettotal = bookingNewCount *100;
                document.getElementById("netPrice").innerText = '$'+nettotal;
                subtotal();
            }
                
            //first class booking handler
            function fastClassBookingHandler(increase)
                {
                const bookingnumber = document.getElementById("bookingNumber");
                const bookingCount = parseInt(bookingnumber.value);
                let bookingNewCount = 0;
                if(increase==true){
                bookingNewCount = bookingCount + 1;
                }
                if(increase == false && bookingCount>0){
                bookingNewCount = bookingCount - 1;
                }
                bookingNumber.value = bookingNewCount;   
                const nettotal = bookingNewCount *150;
                document.getElementById("netPrice").innerText = '$'+nettotal;
                subtotal();
            }