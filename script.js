
const friends = [
    {
        name: "Friend 1",
        photo: "images/friend1.jpg.jpeg"
    },
    {
        name: "Friend 2",
        photo: "images/friend2.jpg.jpeg"
    },
    {
        name: "Friend 3",
        photo: "images/friend3.jpg.jpeg"
    }
];

let currentFriend = 0;

function nextFriend() {
    currentFriend = (currentFriend + 1) % friends.length;

    document.getElementById("friendPhoto").src =
        friends[currentFriend].photo;

    document.getElementById("friendName").textContent =
        friends[currentFriend].name;

    document.getElementById("friendNumber").textContent =
        "Friend " + (currentFriend + 1) +
        " of " + friends.length;
}
