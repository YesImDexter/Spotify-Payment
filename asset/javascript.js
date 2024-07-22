function copyBank() {

    // Copy the text inside the text field
    navigator.clipboard.writeText("11112800202189");

    // Alert the copied text
    Swal.fire({
        title: "Copied To Clipboard",
        showCloseButton: true,
        confirmButtonColor: '#2563eb',
        timer: 2000
    }
    )
}

document.getElementById('attachBtn').addEventListener('click', function () {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function (event) {
    const input = event.target;
    const fileName = input.files.length > 0 ? input.files[0].name : 'No file chosen';
    document.getElementById('fileName').textContent = fileName;
});

function openQR() {
    Swal.fire({
        title: "Duit Now QR",
        showCloseButton: true,
        imageUrl: "asset/QR_White.png",
        confirmButtonText: "<i class='fa fa-file-arrow-down mr-2'></i>Download QR",
        showCancelButton: true,
        cancelButtonText: 'Done',

        confirmButtonColor: '#db2777',
        cancelButtonColor: "#16a34a",

    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            const imageUrl = 'asset/qr_img.jpeg';

            // Create an invisible link element
            const link = document.createElement('a');
            link.href = imageUrl;

            // Set the download attribute with a default file name
            link.download = 'QR_Spotify_Payment.jpeg';

            // Append the link to the body (necessary for Firefox)
            document.body.appendChild(link);

            // Programmatically click the link to trigger the download
            link.click();

            // Remove the link from the document
            document.body.removeChild(link);
        }
    });
}

function openOverview() {
    Swal.fire({
        confirmButtonText: "Noted",
        html: `            <div class="flex justify-center py-1">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="flex flex-col p-3 rounded-md bg-[#282828]">
                <div class="flex py-2 items-center">
                    <div style="
                        background-color: #00d856;
                        border-radius: 0.125rem;
                        width: 1.25rem;
                        height: 1.25rem;
                        margin-right: .5rem;
                    "></div>
                    <h1 class="font-bold">Month Paid</h1>
                </div>
                <p class="text-sm" style="text-align: left;">
                    Months You have paid and has been verified. Thanks for paying.
                </p>
            </div>

            <div class="flex flex-col p-3 rounded-md bg-[#282828]">
                <div class="flex py-2 items-center">
                    <div style="
                    background-color: #dc2626;
                    border-radius: 0.125rem;
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-right: .5rem;
                "></div>
                    <h1 class="font-bold">Month Due</h1>
                </div>
                <p class="text-sm" style="text-align: left;">
                    Months that is due to be payed. Please pay monthly subscription.
                </p>
            </div>

            <div class="flex flex-col p-3 rounded-md bg-[#282828]">
                <div class="flex py-2 items-center">
                    <div style="
                    background-color: #2563eb;
                    border-radius: 0.125rem;
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-right: .5rem;
                "></div>
                    <h1 class="font-bold">Verifying</h1>
                </div>
                <p class="text-sm" style="text-align: left;">
                    Any proof of payment sent to be verified by me. Please wait as I verify em.
                </p>
            </div>

            <div class="flex flex-col p-3 rounded-md bg-[#282828]">
                <div class="flex py-2 items-center">
                    <div style="
                    outline: solid 2px #22c55e;
                    border-radius: 0.125rem;
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-right: .5rem;
                "></div>
                    <h1 class="font-bold">Current Month</h1>
                </div>
                <p class="text-sm" style="text-align: left;">
                    The current month, as simple as that.
                </p>
            </div>

            <div class="flex flex-col p-3 rounded-md bg-[#282828]">
                <div class="flex py-2 items-center">
                    <div style="
                    background-color: #facc15;
                    border-radius: 0.125rem;
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-right: .5rem;
                "></div>
                    <h1 class="font-bold">Birthday Month!</h1>
                </div>
                <p class="text-sm" style="text-align: left;">
                    It's your special month, payment for that month is on me!.
                </p>
            </div>
        </div>
    </div>`,
        confirmButtonColor: '#16a34a',
        customClass: {
            confirmButton: 'custom-confirm-button',
            cancelButton: 'custom-cancel-button',
        }
    })
}

function sendPayment() {
    Swal.fire({
        icon: "success",
        title: "File Sent For Verification",
        text: "Thanks for paying your taxes",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 2000
    });
}

function openSecret() {
    Swal.fire({
        title: "FistBump ?",
        imageUrl: "asset/cat1.jpg",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Fist Bump",
        denyButtonText: `*Do Nothing`
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire({
                imageUrl: "asset/cat3.jpg",
                text: ":3",
                showConfirmButton: false,
                showCloseButton: true,
                timer: 2000
            });
        } else if (result.isDenied) {
            Swal.fire({
                imageUrl: "asset/cat2.jpg",
                text: ">:(",
                showConfirmButton: false,
                showCloseButton: true,
                timer: 2000
            });
        }
    });
}