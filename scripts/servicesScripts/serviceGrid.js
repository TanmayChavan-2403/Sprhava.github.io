const services = [{
        icon: "1",
        head: "Consulting Services",
        body: "Project management and architectural solutions for Deep Learning, Neural Networks, Data Science across industries",
    },
    {
        icon: "2",
        head: "POC at zero cost",
        body: "If you are a Health care/Automotive company with lot datasets then we help evaluate start-of-art AI solution for process automation",
    },
    {
        icon: "3",
        head: "AI smart solution for ADAS system",
        body: "Helping OEM/Supplier looking for integrating smart AI solution into the ADAS system to help customers interaction with the vehicle",
    },
    {
        icon: "4",
        head: "AI solution for Autonomous driving",
        body: "We help build AI solution for different level of autonomous driving with machine learning techniques and deep learning",
    },
    {
        icon: "5",
        head: "Anomaly detection and diagnosis",
        body: "Anomaly detection and diagnosis in multivariate time series refer to identifying abnormal status in certain time steps and pinpointing the root causes.",
    },
    {
        icon: "6",
        head: "Ensure data privacy for AI solution",
        body: "Either healthcare or Automotive, the AI solution implemented can ensure high level of security and safety ensuring data privacy",
    },
];

const grid = document.querySelector(".grid-container");

services.forEach((service, index) => {
    const icon = document.createElement("div");
    icon.setAttribute("class", "icon");

    const i = document.createElement("i");
    const ii = document.createTextNode(service.icon)
    i.appendChild(ii)
    icon.appendChild(i)

    const h2 = document.createElement("h2");
    const header = document.createTextNode(service.head);
    h2.appendChild(header)


    const p = document.createElement("p");
    const body = document.createTextNode(service.body)
    p.appendChild(body)




    const content = document.createElement("div");
    content.setAttribute("class", "content");

    // content.appendChild(i)
    content.appendChild(h2);
    content.appendChild(p);



    const thumb = document.createElement("div");
    thumb.setAttribute("class", "grid-item grid-item-" + index);

    thumb.appendChild(icon);
    thumb.appendChild(content)



    grid.appendChild(thumb);
});