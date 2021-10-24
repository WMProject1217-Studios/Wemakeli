var score;

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

(function() {
    function getStyle(el, cssprop) {
        if (el.currentStyle) { //IE
            return el.currentStyle[cssprop];
        } else if (window.getComputedStyle) { //Firefox
            return window.getComputedStyle(el, '')[cssprop];
        } else //try and get inline style
            return el.style[cssprop];
    }

    window.onresize = function() {
        var ratio = 638 / 850,
            footer = document.getElementById('footer'),
            heightOffset = getStyle(footer, 'display') === 'none' ? 0 : 80,
            width = window.innerWidth,
            height = window.innerHeight - footer.clientHeight - heightOffset;

        if (width * ratio > height) {
            width = height / ratio;
        }

        gamelayout.style.width = width + 'px';

        gamelayout.style.marginTop = ((window.innerHeight - gamelayout.clientHeight - heightOffset) / 2) + 'px';
    };

    var canvas = document.getElementById('canvas'),
        gamelayout = document.getElementById('gamelayout'),
        ctx = canvas.getContext('2d'),

        new_canvas = document.createElement('CANVAS'),
        new_ctx = new_canvas.getContext('2d'),
        content_name,

        upload_image,
        render,
        last_render_time,

        view_width = window.innerWidth,
        view_height = window.innerHeight,

        images = {},
        sounds = {},

        stages = {},
        current_stage = null,

        is_touch = !!(typeof document.documentElement.ontouchstart !== 'undefined');

    canvas.width = 1024;
    canvas.height = 768;

    ctx.imageSmoothingEnabled = ctx.webkitImageSmoothingEnabled = ctx.mozImageSmoothingEnabled = false;

    current_stage = stages.loading = (function() {
        var init = false,
            show_bar = false,
            loader = document.getElementById('loader'),
            asset_count = 35,
            assets_loaded = 0,
            asset_onload = function() {
                if (++assets_loaded === asset_count) {
                    current_stage = stages.title;
                }
            };

        var Sound = function(src, callback, volume, loops) {
            var self = this;

            this.src = src;
            this.loops = loops;

            this.sound = soundManager.createSound({
                id: src,
                url: src,
                autoLoad: true,
                volume: volume || 100,
                onload: callback,
                whileloading: function() {
                    if (this.readytoplay === undefined) {
                        if (this.bytesLoaded / this.bytesTotal > 0.05 || this.bytesTotal == null) {
                            this.readytoplay = true;
                            callback.call(this);
                        }
                    }
                }
            });

            setTimeout(
                function() {
                    if (this.readytoplay === undefined) {
                        self.sound.readytoplay = true;
                        callback.call(self.sound);
                    }
                },
                2000
            );
        };
        Sound.prototype = {
            play: function() {
                if (this.loops) {
                    this.sound.play({
                        loops: this.loops
                    });
                } else {
                    this.sound.play();
                }
            },
            pause: function() {
                this.sound.pause();
            },
            reset: function() {
                this.sound.setPosition(0);
            }
        };

        var preload = function(src) {
                var img = new Image();
                img.onload = asset_onload;
                img.src = src;
                return img;
            },
            preloadAudio = (function() {
                var audio_format;
                try {
                    var audio = new Audio(),
                        audio_format = audio.canPlayType('audio/ogg') ? '.mp3' : '.mp3';
                } catch (e) {
                    audio_format = '.mp3';
                }
                return function(src, volume, loops) {
                    /*var audio = new Audio();
                     audio.onload = asset_onload;
                     audio.src = src + audio_format;
                     return audio;*/
                    return new Sound(src + audio_format, asset_onload, volume, loops);
                }
            })();

        var gradient = ctx.createLinearGradient(0, 320, 0, 384);
        gradient.addColorStop(0, '#7effff');
        gradient.addColorStop(1, '#133c8d');
        return function() {
            if (!init) {
                init = true;
                loader.onload = function() {
                    show_bar = true;

                    images.title = preload('img/title.png');
                    images.click_to_start = preload('img/click_to_start.png');
                    images.controls = preload('img/controls.png');
                    images.gameover_background = preload('img/gameover_background.png');
                    images.gameover_text = preload('img/gameover_text.png');
                    images.gameover_title = preload('img/gameover_title.png');
                    images.share_facebook = preload('img/share_facebook.png');
                    images.share_facebook_selected = preload('img/share_facebook_selected.png');
                    images.share_twitter = preload('img/share_twitter.png');
                    images.share_twitter_selected = preload('img/share_twitter_selected.png');
                    images.retry = preload('img/retry.png');
                    images.retry_selected = preload('img/retry_selected.png');
                    images.front = preload('img/front.png');
                    images.back = preload('img/back.png');
                    images.sky = preload('img/sky.png');
                    images.hud = preload('img/hud.png');
                    images.avatars = preload('img/avatars.png');
                    images.numbers = preload('img/numbers.png');
                    images.z = preload('img/z.png');

                    images.punch_0 = preload('img/punch_0.png');
                    images.punch_1 = preload('img/punch_1.png');
                    images.punch_2 = preload('img/punch_2.png');
                    images.punch_3 = preload('img/punch_3.png');
                    images.punch_4 = preload('img/punch_4.png');
                    images.punch_5 = preload('img/punch_5.png');

                    soundManager.setup({
                        debugMode: false,
                        flashVersion: 9,
                        url: '/',
                        flashLoadTimeout: 5000,
                        onready: function() {
                            sounds.death = preloadAudio('sound/death');
                            sounds.intro = preloadAudio('sound/intro', 40, 100);
                            sounds.outro = preloadAudio('sound/outro', 50);
                            sounds.jump = preloadAudio('sound/jump');
                            sounds.pain1 = preloadAudio('sound/pain1');
                            sounds.pain2 = preloadAudio('sound/pain2');
                            sounds.punch = preloadAudio('sound/punch');
                            sounds.friends_listen = preloadAudio('sound/friends_listen', 40, 100);
                            sounds.button_d = preloadAudio('sound/button_d', 70);
                            sounds.waterfall = preloadAudio('sound/waterfall');
                        }
                    });
                };
                loader.src = 'img/loader.png';
            }

            if (show_bar) {
                ctx.fillStyle = '#000';
                ctx.fillRect(0, 0, 1024, 768);
                ctx.drawImage(loader, 304, 320);

                ctx.fillStyle = gradient;
                ctx.fillRect(320, 340, (assets_loaded / asset_count) * 378, 39);
            }
        }
    })();

    stages.title = (function() {
        var blink_on = true,
            blink_duration = 1000,
            blink_time = 0,
            init = false,

            proceed = function(e) {
                var target = e.target || e.srcElement;
                if (target.nodeName === 'A') return;

                if (e.keyCode !== undefined && e.keyCode !== 0) {
                    if (e.keyCode !== 16 && e.keyCode !== 32 && e.keyCode !== 37 && e.keyCode !== 38 && e.keyCode !== 39 && e.keyCode !== 40) {
                        return;
                    }
                }

                window.document.removeEventListener('click', proceed);
                window.document.removeEventListener('touchstart', proceed);
                window.document.removeEventListener('keyup', proceed);
                current_stage = stages.controls;
                sounds.button_d.reset();
                sounds.button_d.play();
            };

        return function(delta) {
            if (!init) {
                init = true;
                if (!is_touch) {
                    window.document.addEventListener('click', proceed);
                    window.document.addEventListener('keyup', proceed);
                } else {
                    window.document.addEventListener('touchstart', proceed);
                }

                sounds.intro.play();
            }

            blink_time += delta;
            if (blink_time >= blink_duration) {
                blink_time = blink_time % blink_duration;
                blink_on = !blink_on;
            }

            ctx.drawImage(images.title, 0, 0);

            if (blink_on) {
                ctx.drawImage(images.click_to_start, 53, 588);
            }
        };
    })();

    stages.controls = (function() {
        var init = false,

            proceed = function(e) {
                var target = e.target || e.srcElement;
                if (target.nodeName === 'A') return;

                if (e.keyCode !== undefined && e.keyCode !== 0) {
                    if (e.keyCode !== 16 && e.keyCode !== 32 && e.keyCode !== 37 && e.keyCode !== 38 && e.keyCode !== 39 && e.keyCode !== 40) {
                        return;
                    }
                }

                window.document.removeEventListener('click', proceed);
                window.document.removeEventListener('touchstart', proceed);
                window.document.removeEventListener('keyup', proceed);
                current_stage = stages.transition;
            };

        return function() {
            if (!init) {
                init = true;
                if (!is_touch) {
                    window.document.addEventListener('click', proceed);
                    window.document.addEventListener('keyup', proceed);
                } else {
                    window.document.addEventListener('touchstart', proceed);
                }
            }

            stages.title();
            ctx.fillStyle = 'rgba( 0, 0, 0, 0.9 )';
            ctx.fillRect(0, 0, 1024, 768);
            ctx.drawImage(images.controls, 0, 0, 1024, 768);
        };
    })();

    stages.transition = (function() {
        var init = false,
            background = null,
            background_ctx = null,

            columns = 80,
            column_width = 1024 / columns,
            column_height = 768,
            column_progress = [],
            column_speed = 0.03,

            next_column = 0,
            last_start = -Infinity;

        return function() {
            var i;

            if (!init) {
                init = true;

                background = document.createElement('CANVAS');
                background.width = 1024;
                background.height = 768;

                stages.controls(0);
                background_ctx = background.getContext('2d');
                background_ctx.drawImage(canvas, 0, 0);

                for (i = 0; i < columns; i++) {
                    column_progress.push({
                        column: i,
                        progress: 0
                    });
                }

                column_progress.sort(function() {
                    return Math.random() - 0.5;
                });

                sounds.intro.pause();
                clearInterval(sounds.intro_interval);
                sounds.waterfall.play();
            }

            stages.game(0);

            var now = new Date().getTime();

            for (i = 0; i < next_column; i++) {
                column_progress[i].progress += column_speed;
            }

            var proceed = true;
            for (i = 0; i < columns; i++) {
                if (column_progress[i].progress < 1) proceed = false;
                ctx.drawImage(
                    background,
                    column_progress[i].column * column_width,
                    0,
                    column_width,
                    column_height,
                    column_progress[i].column * column_width - 1,
                    column_progress[i].progress * column_height,
                    column_width + 1,
                    column_height
                );
            }

            // Start a new column?
            if (next_column < columns) {
                next_column += 10;
                last_start = now;
            }

            if (proceed) {
                current_stage = stages.game;
                sounds.waterfall.pause();
                sounds.friends_listen.play();
            }
        };
    })();

    stages.game = (function() {
        var init = false,

            bar_width = 230,
            lvl_yellow = 50,
            lvl_red = 20,

            health = 100,
            energy = 100,

            green = '#00ff00',
            yellow = '#ffff00',
            red = '#ff0000',
            punch_overlay = 'rgba( 255, 0, 0, 0.4 )',

            hand_position = 0,
            hand_speed = 0.01,

            is_punching = false,
            punch_state = 0,
            extra_punches = 0,
            punch_speed = 0.027,
            punch_delay = 200,
            punch_energy = 20,
            punch_damage = 10,
            punch_damage_random = 5,
            is_front = true,
            is_left = false,
            is_right = false,
            is_jump = false,
            is_forward = false,
            sky_offset = 0,

            head_turned = 0,
            head_turned_time = 0,

            game_time = 1,

            energy_speed = -0.1,
            health_speed = 1,
            sky_speed = 0.1,

            gameover = false,
            firsttime_dead = false,
            dead_time = 0,
            gameover_selection = is_touch ? -1 : 0,
            has_selected = false,
            blink_on = true,
            blink_duration = 400,
            blink_time = 0,

            Zs = [],
            z_time = 2500,

            onkeydown = function(e) {
                var keyCode = e.keyCode;
                if (e.type === 'touchstart') keyCode = 32;

                if (keyCode === 40) {
                    // Down arrow
                    is_front = false;
                } else if (keyCode === 38) {
                    // Forward
                    is_forward = true;
                } else if (keyCode === 37) {
                    // Left
                    is_left = true;
                } else if (keyCode === 39) {
                    // Right
                    is_right = true;
                } else if (keyCode === 16) {
                    // Shift
                    if (!is_jump) {
                        is_jump = true;
                        sounds.jump.reset();
                        sounds.jump.play();

                        setTimeout(
                            function() {
                                is_jump = false;
                            },
                            200
                        );
                    }
                } else if (keyCode === 32) {
                    // Spacebar
                    if (punch_state === 0) {
                        is_punching = true;
                        punch_state = 1;
                        sounds.punch.play();
                    } else {
                        extra_punches++;
                    }
                }
            },

            onkeyup = function(e) {
                if (e.keyCode === 40) {
                    // Down arrow
                    is_front = true;
                } else if (e.keyCode === 38) {
                    // Forward
                    is_forward = false;
                } else if (e.keyCode === 37) {
                    // Left
                    is_left = false;
                } else if (e.keyCode === 39) {
                    // Right
                    is_right = false;
                }
            },

            doFB = function() {
                gameover_selection = 0;
                has_selected = true;
                setTimeout(
                    function() {
                        has_selected = false;
                    },
                    1600
                );

                var time = game_time,
                    hours, minutes, seconds;

                hours = ~~(time / 60 / 60);
                time -= hours * 60 * 60;

                minutes = ~~(time / 60);
                time -= minutes * 60;

                seconds = ~~(time);

                hours = (hours < 10 ? '0' : '') + hours.toString();
                minutes = (minutes < 10 ? '0' : '') + minutes.toString();
                seconds = (seconds < 10 ? '0' : '') + seconds.toString();

                FB.ui({
                    method: 'feed',
                    link: 'http://www.waitinginline3d.com',
                    caption: 'WaitingInLine3D.com',
                    name: 'I just waited ' + hours + ':' + minutes + ':' + seconds + ' and scored ' + (score || 0) + ' points!',
                    description: 'Play Waiting in Line 3D - an exciting new music videogame where you wait in line. Created for ManCub\'s, \'Friends Listen\'. Directed by Rajeev Basu.',
                    app_id: 244818892341482,
                    display: 'popup',
                    picture: content_name ? 'http://www.waitinginline3d.com/screenshots/' + content_name : undefined
                }, function(response) {});
            },

            doTwitter = function() {
                gameover_selection = 1;
                has_selected = true;
                setTimeout(
                    function() {
                        has_selected = false;
                    },
                    1600
                );

                var time = game_time,
                    hours, minutes, seconds;

                hours = ~~(time / 60 / 60);
                time -= hours * 60 * 60;

                minutes = ~~(time / 60);
                time -= minutes * 60;

                seconds = ~~(time);

                hours = (hours < 10 ? '0' : '') + hours.toString();
                minutes = (minutes < 10 ? '0' : '') + minutes.toString();
                seconds = (seconds < 10 ? '0' : '') + seconds.toString();

                handleIntent(hours + ':' + minutes + ':' + seconds);
            },

            doRetry = function() {
                gameover_selection = 2;
                has_selected = true;
                setTimeout(
                    function() {
                        has_selected = false;
                        location.reload();
                    },
                    1600
                );
            },

            makeSelection = function(e) {
                var x = e.targetTouches[0].clientX - canvas.offsetLeft,
                    y = e.targetTouches[0].clientY - canvas.offsetTop,
                    px = x / canvas.offsetWidth,
                    py = y / canvas.offsetHeight;

                if (px >= .27 && px <= .72) {
                    if (py >= .62 && py <= .67) {
                        doFB();
                    } else if (py >= .67 && py <= .72) {
                        doTwitter();
                    } else if (py >= .72 && py <= .77) {
                        doRetry();
                    }
                }
            },

            changeSelection = function(e) {
                if (has_selected) return;

                var play_sound = false;

                if (e.keyCode === 40) {
                    // Down arrow
                    gameover_selection++;
                    if (gameover_selection > 2) gameover_selection = 0;
                    play_sound = true;
                } else if (e.keyCode === 38) {
                    // Up arrow
                    gameover_selection--;
                    if (gameover_selection < 0) gameover_selection = 2;
                    play_sound = true;
                } else if (e.keyCode === 13 || e.keyCode === 32) {
                    // Enter
                    if (gameover_selection === 0) {
                        doFB();
                    } else if (gameover_selection === 1) {
                        doTwitter();
                    } else if (gameover_selection === 2) {
                        doRetry();
                    }
                }

                if (play_sound === true) {
                    sounds.button_d.reset();
                    sounds.button_d.play();
                }
            },

            drawBars = function() {
                var draw_width;

                if (energy > lvl_yellow) {
                    ctx.fillStyle = green;
                } else if (energy > lvl_red) {
                    ctx.fillStyle = yellow;
                } else {
                    ctx.fillStyle = red;
                }
                draw_width = energy / 100 * bar_width;
                ctx.fillRect(191, 720, draw_width, 3);
                ctx.globalAlpha = 0.5;
                ctx.fillRect(191, 723, draw_width, 3);
                ctx.globalAlpha = 1;
            },

            drawFont = function(character, x, y) {
                var character_offset = 0;
                switch (character) {
                    case '1':
                        character_offset = 24;
                        break;
                    case '2':
                        character_offset = 48;
                        break;
                    case '3':
                        character_offset = 72;
                        break;
                    case '4':
                        character_offset = 96;
                        break;
                    case '5':
                        character_offset = 120;
                        break;
                    case '6':
                        character_offset = 144;
                        break;
                    case '7':
                        character_offset = 168;
                        break;
                    case '8':
                        character_offset = 192;
                        break;
                    case '9':
                        character_offset = 216;
                        break;
                    case ':':
                        character_offset = 240;
                        break;
                }

                ctx.drawImage(
                    images.numbers,
                    character_offset,
                    0,
                    24,
                    28,
                    x,
                    y,
                    24,
                    28
                );
            },

            drawHealth = function() {
                var str_health = Math.round(health) + '',
                    x_offset = (3 - str_health.length) * -13;

                if (str_health.length === 3) {
                    drawFont('1', 32 + x_offset, 706)
                }

                if (str_health.length >= 2) {
                    drawFont(str_health[str_health.length - 2], 58 + x_offset, 706);
                }

                drawFont(str_health[str_health.length - 1], 86 + x_offset, 706);
            },

            drawTime = function(base_position) {
                var time = game_time,
                    hours, minutes, seconds;

                hours = ~~(time / 60 / 60);
                time -= hours * 60 * 60;

                minutes = ~~(time / 60);
                time -= minutes * 60;

                seconds = ~~(time);

                hours = (hours < 10 ? '0' : '') + hours.toString();
                minutes = (minutes < 10 ? '0' : '') + minutes.toString();
                seconds = (seconds < 10 ? '0' : '') + seconds.toString();

                drawFont(hours[0], base_position.x, base_position.y);
                drawFont(hours[1], base_position.x + 27, base_position.y);

                drawFont(':', base_position.x + 46, base_position.y + 2);

                drawFont(minutes[0], base_position.x + 64, base_position.y);
                drawFont(minutes[1], base_position.x + 91, base_position.y);

                drawFont(':', base_position.x + 110, base_position.y + 2);

                drawFont(seconds[0], base_position.x + 128, base_position.y);
                drawFont(seconds[1], base_position.x + 155, base_position.y);
            };

        window.setProperty = function(prop, value) {
            eval(prop + ' = ' + value);
        };

        return function(delta) {
            if (!init && delta > 0) {
                init = true;
                window.document.addEventListener('keydown', onkeydown);
                window.document.addEventListener('touchstart', onkeydown);
                window.document.addEventListener('keyup', onkeyup);
            }

            if (gameover === true) {
                dead_time += delta / 1000;
                if (dead_time <= 1) {
                    ctx.fillStyle = '#000';
                    ctx.fillRect(0, 0, 1024, 768);
                    return;
                } else {
                    if (firsttime_dead === true) {
                        firsttime_dead = false;
                        sounds.friends_listen.pause();
                        sounds.outro.play();
                        window.document.addEventListener('keydown', changeSelection);
                        canvas.addEventListener('touchstart', makeSelection);
                    }
                }
            }

            // Increase score!
            score += ~~(Math.atan2(delta, Math.pow(delta, 2)));

            if (health > 0) {
                game_time += delta / 1000;

                energy -= delta * energy_speed * Math.random() + (Math.log(game_time) * Math.LN2 / 100);
                if (energy < 0) energy = 0;

                health += delta * health_speed * Math.random();
                if (health > 100) health = 100;
            }

            // Sky
            sky_offset += delta * sky_speed;
            if (sky_offset > 1024) sky_offset = sky_offset % 1024;
            ctx.drawImage(images.sky, 0, 0, 1024, 324, is_front ? -sky_offset : sky_offset + 512, 0, 1026, 346);
            ctx.drawImage(images.sky, 0, 0, 1024, 324, is_front ? -sky_offset + 1023 : sky_offset - 512, 0, 1026, 346);

            // Main view
            if (gameover !== true) {
                var x_offset = is_left ? -10 : (is_right ? 10 : 0),
                    y_offset = is_jump ? 10 : 0,
                    additional = is_forward ? 10 : 0;
                ctx.drawImage(is_front ? images.front : images.back, 0, 0, 1024, 768, -10 - x_offset - additional, -10 + y_offset - additional, 1044 + additional * 2, 768 + additional * 2);
            }

            // Fist
            hand_position += hand_speed * delta;
            if (hand_position < 0) {
                hand_position = 0;
                hand_speed *= -1;
            } else if (hand_position > 10) {
                hand_position = 10;
                hand_speed *= -1;
            }

            if (is_punching) {
                punch_state += delta * punch_speed;
                if (punch_state >= 6) {
                    punch_state = 5;
                    is_punching = false;
                    energy = Math.min(100, energy + punch_energy);
                    health -= punch_damage + punch_damage_random * Math.random();

                    if (health <= 80 && !sounds.pain1.has_played) {
                        sounds.pain1.has_played = true;
                        sounds.pain1.play();
                    }

                    if (health <= 40 && !sounds.pain2.has_played) {
                        sounds.pain2.has_played = true;
                        sounds.pain2.play();
                    }

                    navigator.webkitVibrate && navigator.webkitVibrate(70);
                    navigator.mozVibrate && navigator.mozVibrate(70);
                    navigator.vibrate && navigator.vibrate(70);

                    setTimeout(
                        function() {
                            punch_state = 0;
                            extra_punches = 0;
                        },
                        punch_delay
                    );
                }
            }

            if ((health <= 0 || energy <= 3) && !gameover) {
                gameover = true;
                firsttime_dead = true;
                health = 0;
                energy = 3;
                window.document.removeEventListener('keydown', onkeydown);
                window.document.removeEventListener('touchstart', onkeydown);
                window.document.removeEventListener('keyup', onkeyup);

                sounds.death.play();

                ctx.fillStyle = '#000';
                ctx.fillRect(0, 0, 1024, 768);
                return;

            } else {
                ctx.drawImage(images['punch_' + Math.floor(punch_state)], 0, 43 + hand_position);
            }

            if (punch_state === 5 || health === 0) {
                // Don't draw this on a screen shot
                if (health > 15 || health === 0 || content_name !== undefined) {
                    if (extra_punches === 0) {
                        ctx.fillStyle = punch_overlay;
                    } else {
                        ctx.fillStyle = 'rgba( ' + ~~(Math.random() * 255) + ', ' + ~~(Math.random() * 255) + ', ' + ~~(Math.random() * 255) + ', 0.7 )';
                    }
                    ctx.fillRect(0, 0, 1024, 768);
                }
            }

            // Blacking out
            ctx.fillStyle = 'rgba( 0, 0, 0, ' + (1 - energy / 100) + ' )';
            ctx.fillRect(0, 0, 1024, 768);

            if (gameover === true) {
                ctx.drawImage(images.gameover_background, 0, 0, 1024, 768);
            }

            // HUD
            ctx.drawImage(images.hud, 0, 643);
            drawBars();
            drawHealth();
            drawTime({
                x: 595,
                y: 706
            });

            // Avatar
            var offset_x = 0,
                can_turn_head = true;
            if (health === 0) {

            } else if (punch_state !== 0) {
                offset_x = 5;
                can_turn_head = false;
            } else if (is_left === true) {
                offset_x = 4;
                can_turn_head = false;
            } else if (is_right === true) {
                offset_x = 3;
                can_turn_head = false;
            } else if (energy <= 30) {
                can_turn_head = false;
                offset_x = 7;
            } else if (energy <= 70) {
                offset_x = 6;
            }

            if (can_turn_head && head_turned === 0 && Math.random() <= 0.0005) {
                head_turned = 2;
            } else if (can_turn_head && head_turned === 0 && Math.random() <= 0.001) {
                head_turned = Math.round(Math.random()) * 2 - 1;
            } else if (head_turned !== 0) {
                head_turned_time += delta;
                if (head_turned_time >= 1000) {
                    head_turned = head_turned_time = 0;
                }
            }

            if (gameover === false && can_turn_head && head_turned !== 0) {
                if (head_turned === -1) {
                    offset_x = 1;
                } else if (head_turned === 1) {
                    offset_x = 2;
                } else if (head_turned === 2) {
                    offset_x = 9;
                }
            }

            var y_source = 0 + Math.floor((100 - health) / 20) * 105;

            ctx.drawImage(
                images.avatars,
                Math.max(0, offset_x * 85),
                y_source,
                83,
                y_source === 525 ? 100 : 105,
                474 - (offset_x === 3 || offset_x === 4 ? 3 : 0),
                655,
                85,
                105
            );

            // Draw score
            if (score > 0) {
                ctx.drawImage(images.hud_fill, 902, 678, 122, 396);
                drawFont(score, 678, 902);
            }

            if (gameover === true) {
                ctx.fillStyle = 'rgba( 255, 0, 0, 0.5 )';
                ctx.fillRect(0, 0, 1024, 768);
                ctx.fillStyle = 'rgba( 0, 0, 0, 0.75 )';
                ctx.fillRect(0, 0, 1024, 768);

                ctx.drawImage(images.gameover_title, 0, 0, 1024, 768);

                blink_time += delta;
                if (blink_time >= blink_duration) {
                    blink_time = blink_time % blink_duration;
                    blink_on = !blink_on;
                }

                ctx.drawImage(images.gameover_text, 0, 0, 1024, 768);
                drawTime({
                    x: 520,
                    y: 372
                });

                if (gameover_selection !== 0 || blink_on || !has_selected)
                    ctx.drawImage(gameover_selection === 0 ? images.share_facebook_selected : images.share_facebook, 0, 480);
                if (gameover_selection !== 1 || blink_on || !has_selected)
                    ctx.drawImage(gameover_selection === 1 ? images.share_twitter_selected : images.share_twitter, 0, 520);
                if (gameover_selection !== 2 || blink_on || !has_selected)
                    ctx.drawImage(gameover_selection === 2 ? images.retry_selected : images.retry, 0, 560);

                return;
            }

            // Sleepy-time Zs
            for (var i = 0; i < Zs.length; i++) {
                Zs[i].y += delta / 100;
                Zs[i].x = Math.sin(Zs[i].y / 10) * 5;
            }

            if (energy <= 30) {
                z_time -= delta;
                if (z_time <= 0) {
                    z_time = 2500;
                    Zs.push({
                        x: 0,
                        y: 0
                    });
                }
            } else {
                z_time = 2500;
            }

            for (i = 0; i < Zs.length; i++) {
                var font_size = (10 + Zs[i].y / 10),
                    opacity = 1 - Math.min(font_size / 20, 1);
                ctx.globalAlpha = opacity;
                ctx.drawImage(images.z, 470 - Zs[i].x, 670 - Zs[i].y, font_size, font_size);
                ctx.globalAlpha = 1;

                if (opacity <= 0) {
                    Zs.splice(i--, 1);
                }
            }

            if (health <= 15 && health > 0 && content_name === undefined) {
                content_name = null;
                new_canvas.width = 398;
                new_canvas.height = 208;
                new_ctx.drawImage(canvas, 0, 318, 1024, 450, 0, 0, 398, 208);
                upload_image = new_canvas.toDataURL();

                var ajax = new XMLHttpRequest(),
                    data = new FormData();

                data.append('share_image', upload_image);

                ajax.open('POST', 'save.php');
                ajax.upload.addEventListener('progress', function(e) {
                    if (e.loaded && e.total) {

                    }
                });
                ajax.addEventListener('load', function(e) {
                    content_name = e.target.response;
                });
                /*ajax.send(data);*/
            }
        };
    })();

    document.body.addEventListener(
        'keydown',
        function(e) {
            if (e.ctrlKey === true && e.keyCode === 70) {
                e.preventDefault();
                e.stopPropagation();

                if (canvas.requestFullScreen) {
                    canvas.requestFullScreen();
                } else if (canvas.webkitRequestFullScreen) {
                    canvas.webkitRequestFullScreen();
                } else if (canvas.mozRequestFullScreen) {
                    canvas.mozRequestFullScreen();
                } else if (canvas.msRequestFullScreen) {
                    canvas.msRequestFullScreen();
                }

                return false;
            } else if (e.keyCode === 32 || e.keyCode === 38 || e.keyCode === 40) {
                e.preventDefault();
            }
        }
    );

    window.onresize();
    document.getElementById('footer').className = '';

    render = function() {
        var now = Date.now(),
            delta = now - last_render_time;

        ctx.clearRect(0, 0, view_width, view_height);
        current_stage(delta);

        last_render_time = now;

        requestAnimationFrame(render);
    };
    last_render_time = Date.now();
    requestAnimationFrame(render);
})();