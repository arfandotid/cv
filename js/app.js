var app = new Vue({
    el: '#app',
    data: {
        profile: {
            banner: 'background-image: url(images/header/2.jpg);',
            avatar: 'images/profile/arfan.png',
            name: 'M. Ghifari Arfan',
            fullname: 'Muhammad Ghifari Arfananda',
            subtitle: 'Web Developer',
            email: 'arfandotid@gmail.com',
            phone: '+62 822-1088-0072',
            birthday: '01 Maret 2000',
            location: 'Bogor, Indonesia',
            about: [
                {item: 'Saya adalah Web Developer dari Bogor, Jawa Barat - Indonesia. Saat ini saya bekerja sebagai IT/Support System pada perusahaan/lembaga sertifikasi. Saya suka untuk menyelesaikan masalah terkait program menjadi lebih mudah, keren dan inovatif.'},
                {item: 'Mengembangkan website yang dapat memberikan informasi dan berguna bagi user adalah pekerjaan sekaligus hobi saya. Pengalaman terbaik saya dalam membuat website adalah dengan menghubungkan aplikasi web saya dengan aplikasi milik kementrian yaitu SILK. Dan masih akan terus mengembangkan website dengan inovasi baru yang diperlukan.'},
            ],
            links: [
                {
                    icon : 'icon-facebook1',
                    url: 'https://www.facebook.com/official.mghifariarfan/',
                },
                {
                    icon : 'icon-instagram1',
                    url: 'https://www.instagram.com/mghifariarfan/',
                },
                {
                    icon : 'icon-github1',
                    url: 'https://www.github.com/arfandotid',
                },
                {
                    icon : 'icon-youtube1',
                    url: 'https://www.youtube.com/c/alamkoding',
                },
            ]
        },
        services: {
            items: [
                {
                    icon: '<img class="case-item__icon" src="images/icons/icon-dev.svg" alt="">',
                    title: 'Web Development',
                    caption: 'Membangun website yang berkualitas.'
                },
                {
                    icon: '<img class="case-item__icon" src="images/icons/icon-design.svg" alt="">',
                    title: 'Web Analyst',
                    caption: 'Terus menganalisa kekuatan dan kelemahan dari suatu website.'
                },
            ]
        },
        clients: {
            items : [
                {
                    url: 'https://sarbisertifikasi.com',
                    img: 'images/clients/sic-light.png',
                    name: 'PT Sarbi International Certification',
                },
                {
                    url: 'https://sarbi.co.id',
                    img: 'images/clients/sml-light.png',
                    name: 'PT Sarbi Moerhani Lestari',
                },
            ]
        },
        resume: {
            education: [
                {
                    title: 'Universitas Bina Sarana Informatika',
                    period: '2018 &mdash; 2021',
                    desc: 'Sistem Informasi memperluas wawasan dibidang informatika bisnis',
                },
                {
                    title: 'SMK Negeri 1 Ciomas',
                    period: '2015 &mdash; 2018',
                    desc: 'Pertama kali terjun ke dunia pemrograman dengan menempuh jurusan Rekayasa Perangkat Lunak (RPL)',
                },
            ],
            experience: [
                {
                    title: 'PT Sarbi International Certification',
                    period: 'Mar 2021 &mdash; Sekarang',
                    desc: 'Dimulai dari magang, hingga menjadi support system dan Operator Penerbit V-Legal pada Lembaga Sertifikasi PT Sarbi International Certification, Bogor.'
                },
                {
                    title: 'Yayasan Yatim Center Al-Ruhamaa',
                    period: 'Okt 2020 &mdash; Des 2020',
                    desc: 'Magang saat kuliah dengan tujuan membuat website Donasi beserta company profile pada Yayasan Yatim Center Al-Ruhamaa, Bogor.',
                },
            ],
            skills: [
                'PHPL',
                'HTML',
                'CSS',
                'JS',
                'Laravel',
                'Codeigniter',
            ]
        },
        portfolio: {
            categories: [
                {
                    filter: '.category-opensource',
                    title: 'Open Source'
                },
                {
                    filter: '.category-wordpress',
                    title: 'Wordpress'
                },
                {
                    filter: '.category-codeigniter',
                    title: 'Codeigniter'
                },
                {
                    filter: '.category-laravel',
                    title: 'Laravel'
                },
            ],
            figure: [
                {
                    link: '#',
                    title: 'Aplikasi Penerbitan Dokumen V-Legal Berbasis Web',
                    img: 'images/portfolio/vlegal.png',
                    caption: 'PT Sarbi International Certification',
                    filter: [
                        'category-codeigniter',
                    ],
                },
                {
                    link: 'https://sarbisertifikasi.com/',
                    title: 'Website Company Profile PT SIC',
                    img: 'images/portfolio/sic.png',
                    caption: 'PT Sarbi International Certification',
                    filter: [
                        'category-wordpress',
                    ],
                },
                {
                    link: 'https://yatimcenter-alruhamaa.org/',
                    title: 'Sistem Informasi Yayasan',
                    img: 'images/portfolio/yca.png',
                    caption: 'Yatim Center Al-Ruhamaa Bogor',
                    filter: [
                        'category-codeigniter',
                    ],
                },
                {
                    link: 'https://github.com/arfandotid/ujian-online-ci',
                    title: 'Ujian Online (CBT) Codeigniter 3',
                    img: 'images/portfolio/cbt.png',
                    caption: 'Alam Koding',
                    filter: [
                        'category-codeigniter',
                        'category-opensource',
                    ],
                },
            ]
        }
    }
});