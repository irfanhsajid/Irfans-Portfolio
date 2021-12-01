import React from 'react';
import Particles from 'react-particles-js';

const TestParticles = () => {
    return (
        <div className="testParticles">

            <Particles

                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                height="100vh"

            />

        </div>
    );
};

export default TestParticles;