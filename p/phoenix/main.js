const data = [
    {
        "Member Code": "GDE-002",
        "Member ID": "ABG",
        "Name": "ABHINAV GUPTA",
        "Role": "Growth Development Executive"
    },
    {
        "Member Code": "GDE-020",
        "Member ID": "MES",
        "Name": "MEHUL SHARMA",
        "Role": "Growth Development Executive"
    },
    {
        "Member Code": "GDE-024",
        "Member ID": "PRY",
        "Name": "PRIYANSHI YADAV",
        "Role": "Growth Development Executive"
    },
    {
        "Member Code": "GDE-025",
        "Member ID": "RYR",
        "Name": "RIYANSH RAJPOOT",
        "Role": "Growth Development Executive"
    },
    {
        "Member Code": "GDE-029",
        "Member ID": "SNA",
        "Name": "SEHAR NAWAZ ALI",
        "Role": "Growth Development Executive"
    },
    {
        "Member Code": "GDE-031",
        "Member ID": "TNY",
        "Name": "TANU YADAV",
        "Role": "Growth Development Executive"
    },
    {
        "Member Code": "MPM-002",
        "Member ID": "SGJ",
        "Name": "SAGAR JHA",
        "Role": "Co-Project Manager and Data Analyst"
    },
    {
        "Member Code": "MTL-001",
        "Member ID": "HRG",
        "Name": "HARSHAL GUPTA",
        "Role": "GDE-Team Lead and Data Analyst"
    },
    {
        "Member Code": "MTL-002",
        "Member ID": "HAM",
        "Name": "HARDIK MALIK",
        "Role": "GDE-Team Lead and Data Analyst"
    }
];

const dataHeader = 'data:image/svg+xml;charset=utf-8'
const $svg = document.getElementById('svg-container').querySelector('svg')
const $holder = document.getElementById('img-container')
const $label = document.getElementById('img-format')

const loadImage = async url => {
    const $img = document.createElement('img')
    $img.src = url
    return new Promise((resolve, reject) => {
        $img.onload = () => resolve($img)
        $img.onerror = reject
    })
}

const serializeAsXML = $e => (new XMLSerializer()).serializeToString($e)

const encodeAsUTF8 = s => `${dataHeader},${encodeURIComponent(s)}`
const encodeAsB64 = s => `${dataHeader};base64,${btoa(s)}`

const getImageURL = async (svgURL, { format, quality }) => {
    const img = await loadImage(svgURL)

    const $canvas = document.createElement('canvas')
    $canvas.width = img.naturalWidth
    $canvas.height = img.naturalHeight
    $canvas.getContext('2d').drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)

    return $canvas.toDataURL(`image/${format}`, quality)
}

const convertSVGtoImg = async e => {
    const certificateID = $("input").val();
    var name = false, role = false;
    if (!certificateID) {
        Swal.fire({
            title: "Enter Certificate ID",
            text: "Certificate ID can not be blank.",
            icon: "error",
            allowEnterKey: false
        });
        return false;
    }

    for (const entry of data) {
        if (certificateID.toLowerCase() == ("PHOENIX-" + entry["Member Code"] + "-" + entry["Member ID"]).toLowerCase()) {
            name = entry.Name;
            role = entry.Role;
            break;
        }
    }

    if (!name || !role) {
        Swal.fire({
            title: "Certificate not found",
            text: "Certificate with the provided ID does not exist.",
            icon: "error",
            allowEnterKey: false
        });
        return false;
    }

    $(".serach-screen").remove();
    $("div.download").css("display", "block").click(() => {
        downloadImage();
    });


    const format = 'png';
    $label.textContent = format;

    var svgURL = encodeAsUTF8(serializeAsXML($svg))

    svgURL = svgURL.replace(`NAME`, name);
    svgURL = svgURL.replace(`ROLE`, `"${role}"`);

    // 0 = min; 1 = max; undefined = use browser default
    const quality = 1
    const dataURL = await getImageURL(svgURL, { format, quality })

    const $img = document.createElement('img')
    $img.src = dataURL
    $img.setAttribute("class", "certificate")
    $img.setAttribute("id", "certificate")
    // remove any existing image
    $holder.textContent = ''
    $holder.append($img)
}

// const buttons = [...document.querySelectorAll('[data-format]')]

function downloadImage() {
    const img = document.getElementById('certificate');

    // Create a canvas element
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    // Convert canvas to data URL
    canvas.toBlob(function (blob) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'certificate.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 'image/png');
}

function search(ele) {
    if (event.key === 'Enter') {
        convertSVGtoImg();
    }
    ele.preventDefault();
    return false;
}

