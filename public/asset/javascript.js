function copyBank() {

    // Copy the text inside the text field
    navigator.clipboard.writeText("11112800202189");

    // Alert the copied text
    Swal.fire("Copied To Clipboard!");
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
            s
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
                    <div class="bg-green-500 rounded-sm w-5 h-5 mr-2"></div>
                    <h1 class="font-bold">Month Paid</h1>
                </div>
                <p class="text-sm" style="text-align: left;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore magna aliqua.
                </p>
            </div>

            <div class="flex flex-col p-3 rounded-md bg-[#282828]">
                <div class="flex py-2 items-center">
                    <div class="bg-red-600 rounded-sm w-5 h-5 mr-2"></div>
                    <h1 class="font-bold">Month Due</h1>
                </div>
                <p class="text-sm" style="text-align: left;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore magna aliqua.
                </p>
            </div>

            <div class="flex flex-col p-3 rounded-md bg-[#282828]">
                <div class="flex py-2 items-center">
                    <div class="bg-blue-600 rounded-sm w-5 h-5 mr-2"></div>
                    <h1 class="font-bold">Verifying</h1>
                </div>
                <p class="text-sm" style="text-align: left;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore magna aliqua.
                </p>
            </div>

            <div class="flex flex-col p-3 rounded-md bg-[#282828]">
                <div class="flex py-2 items-center">
                    <div class="outline outline-green-500 outline-2 rounded-sm w-5 h-5 mr-2"></div>
                    <h1 class="font-bold">Current Month</h1>
                </div>
                <p class="text-sm" style="text-align: left;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore magna aliqua.
                </p>
            </div>

            <div class="flex flex-col p-3 rounded-md bg-[#282828]">
                <div class="flex py-2 items-center">
                    <div class="bg-yellow-400 rounded-sm w-5 h-5 mr-2"></div>
                    <h1 class="font-bold">Birthday Month!</h1>
                </div>
                <p class="text-sm" style="text-align: left;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut
                    labore et dolore magna aliqua.
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