$(function(){
    var model = {
        clickers: [],

        init: function() {
            this.clickers = [];
        },

        addClicker: function(name) {
            this.clickers.push({
                id: this.clickers.length,
                name, 
                src: "img/1784.png",
                count: 0
            });
        },

        click: function(id) {
            this.clickers[id].count++;
        }
    }

    var octupus = {
        init: function() {
            model.init();
            view.init();
        },

        addClicker: function(name) {
            model.addClicker(name);
            view.render();
        },

        clickClicker: function(id) {
            model.click(id);
            view.render();
        },

        clickers: function() {
            return model.clickers;
        }
    }

    var view = {
        active_clicker: -1,
        app_parent: document.getElementById("dmitry-parent"),

        init: function() {
            active_clicker: 0;
        },

        renderObject: function(obj) {
            var wrapper = document.createElement("div");
            wrapper.appendChild(obj);
            view.app_parent.appendChild(wrapper);
        },

        renderButton: function(clicker) {
            var button = document.createElement("input");
            button.setAttribute("type", "button");
            button.value = clicker.name;
            button.onclick = function () {
                view.active_clicker = clicker.id;
                octupus.clickClicker(clicker.id);
            }
            view.renderObject(button);
        },

        renderClicker: function(clicker) {
            var span = document.createElement("span");
            span.innerText = clicker.id + ": " + clicker.name + " - " + clicker.count;
            view.renderObject(span);
        },

        render: function() {
            this.app_parent.innerHTML = "";
            var clickers = octupus.clickers();
            clickers.forEach(view.renderButton);
            if (this.active_clicker >= 0) {
                view.renderClicker(clickers[this.active_clicker]);
            }
        }
    }

    octupus.addClicker("first");
    octupus.addClicker("second");
    octupus.addClicker("third");
});