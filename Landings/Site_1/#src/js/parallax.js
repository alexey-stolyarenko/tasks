
    /*Business block*/
    // Add event listener
    const block_parallax = document.getElementsByClassName('business')[0];


    block_parallax.addEventListener("mousemove", parallax_business);


    const arrow_svg = document.getElementsByClassName('parallax_arrow');
    const sticks_svg = document.getElementsByClassName('parallax_sticks');
    const lightning_svg = document.getElementsByClassName('parallax_lightning');
    const triangle_svg = document.getElementsByClassName('parallax_triangle');



    // Magic happens here
    function parallax_business(e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.005}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = ` ${50 - (_mouseY - _h) * 0.005}% ${50 - (_mouseX - _w) * 0.005}%`;
        let _depth3 = `${50 - (_mouseY - _w) * 0.01}% ${50 - (_mouseX - _h) * 0.01}%`;
        let _depth4 = `${50 - (_mouseX - _h) * 0.01}% ${50 - (_mouseY - _w) * 0.01}%`;
        let    arrow_pos = `${_depth1}`;
        let sticks_pos = `${_depth2}`;
        let triangle_pos = `${_depth4}`;
        let lightning_pos = `${_depth3}`;


        /*console.log(e)*/

        function changePosition(arrow_pos, sticks_pos , lightning_pos, triangle_pos) {
            arrow_svg[0].style.backgroundPosition = arrow_pos;
            sticks_svg[0].style.backgroundPosition = sticks_pos;
            lightning_svg[0].style.backgroundPosition = lightning_pos;
            triangle_svg[0].style.backgroundPosition = triangle_pos;
        }
        setTimeout(changePosition, 200, arrow_pos, sticks_pos, lightning_pos, triangle_pos)
    }






  /*  owners_block*/

    const block_parallax_owners = document.getElementsByClassName('owners')[0]
    block_parallax_owners.addEventListener("mousemove", parallax_owners);
    const arrow_svg_owners = document.getElementsByClassName('owners_parallax_arrow')
    const rocket_svg_owners = document.getElementsByClassName('owners_parallax_rocket')


    function parallax_owners (e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX1 = e.clientX;
        let _mouseY1 = e.clientY;
        let _depth11 = `${50 - (_mouseX1 - _w) * 0.005}% ${50 - (_mouseY1 - _h) * 0.01}%`;
        let _depth22 = `${50 - (_mouseY1 - _w) * 0.01}% ${50 - (_mouseX1 - _h) * 0.01}%`;

        let    arrow_owners_pos = `${_depth11}`;
        let    rocket_owners_pos = `${_depth22}`;

        function changePositionOwners (arrow_owners_pos, rocket_owners_pos) {
            arrow_svg_owners[0].style.backgroundPosition = arrow_owners_pos;
            rocket_svg_owners[0].style.backgroundPosition = rocket_owners_pos;
        }

        setTimeout(changePositionOwners, 200, arrow_owners_pos, rocket_owners_pos)

    }




    /*resources block*/
    const resources_block = document.getElementsByClassName('resources__block')
    const lamp_svg_resources = document.getElementById('lamp');
    resources_block[0].addEventListener('mousemove', parallax_resources)


    function parallax_resources (e) {
        let _w = window.innerWidth / 2;
        let _h = window.innerHeight / 2;
        let _mouseX1 = e.clientX;
        let _mouseY1 = e.clientY;
        let _depth_lamp = `${50 - (_mouseX1 - _w) * 0.005}% ${50 - (_mouseY1 - _h) * 0.01}%`;


        let    lamp_resources_pos = `${_depth_lamp}`;


        function changePositionResources (lamp_resources_pos, ) {
            lamp_svg_resources.style.backgroundPosition = lamp_resources_pos;

        }
        setTimeout(changePositionResources, 200, lamp_resources_pos)

    }

/*
  const  resources_block = document.getElementsByClassName('resources_block');
  const  lamp_svg_resources = document.getElementById('lamp');

    class Parallax {

        constructor(resources_block, lamp_svg_resources) {
            this.resources_block = resources_block;
            this.lamp_svg_resources = lamp_svg_resources;
        }

        checkPos(e){
            let _w = window.innerWidth / 2;
            let _h = window.innerHeight / 2;
            let _mouseX1 = e.clientX;
            let _mouseY1 = e.clientY;
            let _depth_lamp = `${50 - (_mouseX1 - _w) * 0.005}% ${50 - (_mouseY1 - _h) * 0.01}%`;
            let    lamp_resources_pos = `${_depth_lamp}`;
            return lamp_resources_pos;
        }
        changePos(){
            this.lamp_svg_resources.style.backgroundPosition = this.changePos
            console.log(this.checkPos())
        }
    }


 let pa = new Parallax(resources_block, lamp_svg_resources)
    pa.changePos()*/
