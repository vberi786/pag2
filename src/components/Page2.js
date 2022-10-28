import theme from "./theme"
import React from 'react';
import cn from 'classnames';

import section1Styles from './Page2_section1.module.scss';
import styles from './Page2.module.scss';


  
function renderSection1(props) {
  return (
    <section className={cn(section1Styles.section1, section1Styles.section1_layout)}>
      <div className={cn(section1Styles.flex, section1Styles.flex_layout4)}>
        <div className={section1Styles.flex__item}>
          <div className={cn(section1Styles.flex, section1Styles.flex_layout)}>
            <div className={section1Styles.flex__item1}>
              <div className={cn(section1Styles.group, section1Styles.group_layout)}>
                <div
                  style={{ '--src': `url(${require('assets/635a433769d5006725a2dcebb6440d45.png').default})` }}
                  className={cn(section1Styles.contain_block, section1Styles.contain_block_layout)}>
                  <img
                    src={require('assets/29977a4bd81452da63826c322b51f073.png').default}
                    alt=""
                    className={cn(section1Styles.img, section1Styles.img_layout)}
                  />
                </div>
              </div>
            </div>
            <div className={section1Styles.flex__spacer} />
            <div className={section1Styles.flex__item2}>
              <div className={cn(section1Styles.txt, section1Styles.txt_layout)}>BSCDAO</div>
            </div>
          </div>
        </div>
        <div className={section1Styles.flex__spacer1} />
        <div className={section1Styles.flex__item3}>
          <div className={cn(section1Styles.flex, section1Styles.flex_layout3)}>
            <div className={section1Styles.flex__item4}>
              <div
                style={{ '--src': `url(${require('assets/fa6698e0653bcfc6147c90d1cc768973.png').default})` }}
                className={cn(section1Styles.contain_block2, section1Styles.contain_block2_layout)}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout1)}>
                  <div className={section1Styles.flex__item5}>
                    <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                      <img
                        src={require('assets/9b1acb978be12b458be709afcc62a12f.png').default}
                        alt=""
                        className={cn(section1Styles.img, section1Styles.img_layout1)}
                      />
                    </div>
                  </div>
                  <div className={section1Styles.flex__spacer2} />
                  <div className={section1Styles.flex__item6}>
                    <div className={cn(section1Styles.txt1, section1Styles.txt1_layout)}>Daap</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={section1Styles.flex__spacer3} />
            <div className={section1Styles.flex__item7}>
              <div
                style={{ '--src': `url(${require('assets/3c98592cb920aaeefa3f730542c11109.png').default})` }}
                className={cn(section1Styles.contain_block1, section1Styles.contain_block1_layout)}>
                <div className={cn(section1Styles.txt1, section1Styles.txt1_layout1)}>Connect wallet</div>
              </div>
            </div>
            <div className={section1Styles.flex__spacer3} />
            <div className={section1Styles.flex__item8}>
              <div
                style={{ '--src': `url(${require('assets/d6534eb0212cca33ce23451b2c06fe49.png').default})` }}
                className={cn(section1Styles.contain_block3, section1Styles.contain_block3_layout)}>
                <div className={cn(section1Styles.flex, section1Styles.flex_layout2)}>
                  <div className={section1Styles.flex__item9}>
                    <div className={cn(section1Styles.group1, section1Styles.group1_layout)}>
                      <img
                        src={require('assets/0bcf252d1d822dfb136c4bfdddc2ae9f.png').default}
                        alt=""
                        className={cn(section1Styles.img, section1Styles.img_layout2)}
                      />
                    </div>
                  </div>
                  <div className={section1Styles.flex__spacer4} />
                  <div className={section1Styles.flex__item10}>
                    <div className={cn(section1Styles.txt1, section1Styles.txt1_layout2)}>Eng.</div>
                  </div>
                  <div className={section1Styles.flex__spacer5} />
                  <div className={section1Styles.flex__item11}>
                    <img
                      src={require('assets/da8195578b02eae32d4cb6c5820b7b34.png').default}
                      alt=""
                      className={cn(section1Styles.img, section1Styles.img_layout3)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout3)}>
        <div className={cn(section1Styles.txt2, section1Styles.txt2_layout)}>Presale Data</div>

        <div className={cn(section1Styles.flex1, section1Styles.flex1_layout2)}>
          <div className={cn(section1Styles.flex, section1Styles.flex_layout5)}>
            <div className={section1Styles.flex__item12}>
              <div className={cn(section1Styles.group2, section1Styles.group2_layout1)}>
                <img
                  src={require('assets/0d0918ff262a8e6edb920f05575f6c44.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout4)}
                />

                <div className={cn(section1Styles.group2, section1Styles.group2_layout)}>
                  <div className={cn(section1Styles.flex1, section1Styles.flex1_layout)}>
                    <img
                      src={require('assets/2123b597585dae83a8d0d42038a993d3.png').default}
                      alt=""
                      className={cn(section1Styles.img, section1Styles.img_layout5)}
                    />
                    <div className={cn(section1Styles.txt3, section1Styles.txt3_layout)}>0.2BNB</div>
                    <img
                      src={require('assets/6edba15155d770777e173a500aade8e8.png').default}
                      alt=""
                      className={cn(section1Styles.img, section1Styles.img_layout6)}
                    />
                    <div className={cn(section1Styles.txt4, section1Styles.txt4_layout)}>MIN PURCHASE</div>
                    <img
                      src={require('assets/279339766f0bc63e57a354cb6b548c00.png').default}
                      alt=""
                      className={cn(section1Styles.img, section1Styles.img_layout7)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={section1Styles.flex__spacer6} />
            <div className={section1Styles.flex__item12}>
              <div className={cn(section1Styles.group2, section1Styles.group2_layout1)}>
                <img
                  src={require('assets/e80ef474fb88b17170ef9c60c26cbe3f.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout4)}
                />
                <img
                  src={require('assets/18564bd1ed78a7756960e7cad3b72bc0.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout8)}
                />
                <img
                  src={require('assets/eb8a641f05d4b2f7bbd743bcaafc5b07.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout9)}
                />
                <div className={cn(section1Styles.txt4, section1Styles.txt4_layout1)}>MAX PURCHASE</div>
                <div className={cn(section1Styles.txt5, section1Styles.txt5_layout)}>10BNB</div>
                <img
                  src={require('assets/6edba15155d770777e173a500aade8e8.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout10)}
                />
              </div>
            </div>
            <div className={section1Styles.flex__spacer6} />
            <div className={section1Styles.flex__item12}>
              <div className={cn(section1Styles.group2, section1Styles.group2_layout1)}>
                <img
                  src={require('assets/9e5508ad3c7a76d7b60345112ee4b33d.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout4)}
                />
                <img
                  src={require('assets/2ccc637f3a6071dfd498551c6e5da317.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout8)}
                />
                <img
                  src={require('assets/b2222ca2020b77d478881ef4b12642cd.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout9)}
                />
                <div className={cn(section1Styles.txt4, section1Styles.txt4_layout2)}>SOFT CAP</div>
                <div className={cn(section1Styles.txt6, section1Styles.txt6_layout)}>2000BNB</div>
                <img
                  src={require('assets/6edba15155d770777e173a500aade8e8.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout10)}
                />
              </div>
            </div>
            <div className={section1Styles.flex__spacer6} />
            <div className={section1Styles.flex__item12}>
              <div className={cn(section1Styles.group2, section1Styles.group2_layout1)}>
                <img
                  src={require('assets/6c5855e99b0c56c58d8ad65c0a9b0a12.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout4)}
                />
                <img
                  src={require('assets/3849f7d095c8730c844edeb80f5567b8.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout8)}
                />
                <img
                  src={require('assets/2310dfea2ae456ed87a83411cbde27b5.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout9)}
                />
                <div className={cn(section1Styles.txt4, section1Styles.txt4_layout3)}>HARD CAP</div>
                <div className={cn(section1Styles.txt7, section1Styles.txt7_layout)}>1000BNB</div>
                <img
                  src={require('assets/6edba15155d770777e173a500aade8e8.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout10)}
                />
              </div>
            </div>
          </div>

          <div className={cn(section1Styles.flex, section1Styles.flex_layout6)}>
            <div className={section1Styles.flex__item13}>
              <div className={cn(section1Styles.group2, section1Styles.group2_layout1)}>
                <img
                  src={require('assets/8a2dfbc99c2ae7b2622aa54f7df4135e.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout4)}
                />

                <div className={cn(section1Styles.group2, section1Styles.group2_layout)}>
                  <div className={cn(section1Styles.group2, section1Styles.group2_layout1)}>
                    <div className={cn(section1Styles.flex1, section1Styles.flex1_layout1)}>
                      <img
                        src={require('assets/c88ddcd9100a0421c13d56740cc01dc9.png').default}
                        alt=""
                        className={cn(section1Styles.img, section1Styles.img_layout5)}
                      />
                      <div className={cn(section1Styles.txt8, section1Styles.txt8_layout)}>TBD</div>
                      <div className={cn(section1Styles.txt9, section1Styles.txt9_layout)}>TOKEN PRICE</div>
                      <img
                        src={require('assets/bcd6dd597f56c987356a6fe4930a0b73.png').default}
                        alt=""
                        className={cn(section1Styles.img, section1Styles.img_layout7)}
                      />
                    </div>

                    <img
                      src={require('assets/6edba15155d770777e173a500aade8e8.png').default}
                      alt=""
                      className={cn(section1Styles.img, section1Styles.img_layout10)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={section1Styles.flex__spacer7} />
            <div className={section1Styles.flex__item13}>
              <div className={cn(section1Styles.group2, section1Styles.group2_layout1)}>
                <img
                  src={require('assets/9e5508ad3c7a76d7b60345112ee4b33d.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout4)}
                />
                <img
                  src={require('assets/2ccc637f3a6071dfd498551c6e5da317.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout8)}
                />
                <img
                  src={require('assets/b2222ca2020b77d478881ef4b12642cd.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout9)}
                />
                <div className={cn(section1Styles.txt4, section1Styles.txt4_layout4)}>NOW</div>
                <div className={cn(section1Styles.txt6, section1Styles.txt6_layout1)}>% FIGURE</div>
                <img
                  src={require('assets/6edba15155d770777e173a500aade8e8.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout10)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(section1Styles.group2, section1Styles.group2_layout3)}>
        <div className={cn(section1Styles.group1, section1Styles.group1_layout1)}>
          <img
            src={require('assets/b01e7a8bbdc6e5b85b94bc400a87d06a.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout11)}
          />
          <div className={cn(section1Styles.txt2, section1Styles.txt2_layout1)}>FEATURED IN PUBLICATIONS</div>
        </div>

        <div className={cn(section1Styles.group2, section1Styles.group2_layout2)}>
          <img
            src={require('assets/c7c70309a85a1fd82218ecccb9630374.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout12)}
          />
          <img
            src={require('assets/b5da19c5aa225d712832aec965b303b6.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout13)}
          />
          <img
            src={require('assets/830b089ca7631d26aa05727bbe71fac8.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout14)}
          />

          <div className={cn(section1Styles.group1, section1Styles.group1_layout2)}>
            <img
              src={require('assets/784758ba777ebbba649821bef4b4b4f1.png').default}
              alt=""
              className={cn(section1Styles.img, section1Styles.img_layout15)}
            />
            <img
              src={require('assets/89bc0b70f66dddd37dde080d9d4fc4ae.png').default}
              alt=""
              className={cn(section1Styles.img, section1Styles.img_layout16)}
            />
          </div>

          <img
            src={require('assets/29ad32e96b06f9df311e378042ac9400.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout17)}
          />
          <img
            src={require('assets/67d0cd5f536621ad032935268ccd0541.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout18)}
          />
          <img
            src={require('assets/c3fb59ba810bc9c2fd717280f007cfff.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout19)}
          />
          <img
            src={require('assets/4d68a64a03ad63ad7e83f04304935b49.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout20)}
          />
        </div>
      </div>
      <img
        src={require('assets/f22b3064215f62a4f69611ed502dd1e8.png').default}
        alt=""
        className={cn(section1Styles.img, section1Styles.img_layout21)}
      />
      <img
        src={require('assets/1e5a203f5b996d4135c36102a9207a22.png').default}
        alt=""
        className={cn(section1Styles.img, section1Styles.img_layout22)}
      />
      <img
        src={require('assets/85a5c711dbb8433097c9005875f6e204.png').default}
        alt=""
        className={cn(section1Styles.img, section1Styles.img_layout23)}
      />
      <img
        src={require('assets/5b2a9aaa82a6e732e22a336cd9fb702e.png').default}
        alt=""
        className={cn(section1Styles.img, section1Styles.img_layout24)}
      />
      <img
        src={require('assets/bf4ab82d49446f7df9caa161b866def5.png').default}
        alt=""
        className={cn(section1Styles.img, section1Styles.img_layout25)}
      />
      <img
        src={require('assets/e1c1a33d30a6715483ab09718d8e51cd.png').default}
        alt=""
        className={cn(section1Styles.img, section1Styles.img_layout26)}
      />
      <img
        src={require('assets/3d5bbf8c56ae66fbb86a188127b87469.png').default}
        alt=""
        className={cn(section1Styles.img, section1Styles.img_layout27)}
      />
      <img
        src={require('assets/336a88f2392cb9fa450d21c59ba5c04d.png').default}
        alt=""
        className={cn(section1Styles.img, section1Styles.img_layout28)}
      />
      <img
        src={require('assets/541708b72eb61d189de203e3a15156b3.png').default}
        alt=""
        className={cn(section1Styles.img, section1Styles.img_layout29)}
      />
      <img
        src={require('assets/39ed2116255c2e7392acff9e48c2790d.png').default}
        alt=""
        className={cn(section1Styles.img, section1Styles.img_layout30)}
      />
      <img
        src={require('assets/5e8baeba82c77eae8681c6a26c7b3342.png').default}
        alt=""
        className={cn(section1Styles.img, section1Styles.img_layout31)}
      />
      <div className={cn(section1Styles.txt10, section1Styles.txt10_layout)}>100% SECURE</div>
      <div className={cn(section1Styles.txt11_box, section1Styles.txt11_box_layout)}>
        <div className={section1Styles.txt11}>
          <span className={section1Styles.txt11_span0}>
            Disclamier
            <br />
          </span>
          <span className={section1Styles.txt11_span1}>
            Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as
            up. <br />
            {'Profits may be subject to capital gains or other taxes applicable in your jurisdiction.'}
          </span>
        </div>
      </div>
      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout4)}>
        <div className={cn(section1Styles.txt2, section1Styles.txt2_layout2)}>Powered by </div>

        <div className={cn(section1Styles.group2, section1Styles.group2_layout4)}>
          <img
            src={require('assets/3966951d2a4d0a1b8c293fe41b40b164.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout32)}
          />
          <img
            src={require('assets/0c92764233163bc0f5578cb6c14ad4ac.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout33)}
          />
          <img
            src={require('assets/ae8dd243e7f110b6086f92e940898b1c.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout14)}
          />
          <img
            src={require('assets/e888a8593a2bcbc586f9d6e17dfaace6.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout34)}
          />
          <img
            src={require('assets/d3d6ff2a9abe5ed4bc3dd7f255652ca3.png').default}
            alt=""
            className={cn(section1Styles.img, section1Styles.img_layout35)}
          />
        </div>
      </div>
      <img
        src={require('assets/1a726909ada271e7931f01a2f49073ab.png').default}
        alt=""
        className={cn(section1Styles.img, section1Styles.img_layout36)}
      />
      <px-posize x="0px 703fr 1217fr" y="5613px 1px 36fr" absolute>
        <hr className={section1Styles.rect} size={1} />
      </px-posize>
      <px-posize x="1218px 702fr 0fr" y="5614px 1px 35fr" absolute>
        <hr className={section1Styles.rect} size={1} />
      </px-posize>
      <div className={cn(section1Styles.txt12, section1Styles.txt12_layout)}>
        © 2022 - All rights reserved by BCSDAO PROTOCOL.
      </div>
      <div className={cn(section1Styles.flex, section1Styles.flex_layout7)}>
        <div className={section1Styles.flex__item14}>
          <div className={cn(section1Styles.contain_block29, section1Styles.contain_block29_layout)}>
            <img
              src={require('assets/1778396e92e1aa6a1042b81fb19505fd.png').default}
              alt=""
              className={cn(section1Styles.img, section1Styles.img_layout37)}
            />
          </div>
        </div>
        <div className={section1Styles.flex__spacer8} />
        <div className={section1Styles.flex__item14}>
          <div className={cn(section1Styles.contain_block30, section1Styles.contain_block30_layout)}>
            <img
              src={require('assets/8bef0b41a0e0f2ad22793292146f298a.png').default}
              alt=""
              className={cn(section1Styles.img, section1Styles.img_layout38)}
            />
          </div>
        </div>
        <div className={section1Styles.flex__spacer8} />
        <div className={section1Styles.flex__item14}>
          <div className={cn(section1Styles.contain_block31, section1Styles.contain_block31_layout)}>
            <img
              src={require('assets/18748040fd09942e37a05992427dbe98.png').default}
              alt=""
              className={cn(section1Styles.img, section1Styles.img_layout39)}
            />
          </div>
        </div>
        <div className={section1Styles.flex__spacer8} />
        <div className={section1Styles.flex__item14}>
          <div className={cn(section1Styles.contain_block32, section1Styles.contain_block32_layout)}>
            <img
              src={require('assets/89bdf2d04df1f692a3d0080fc5f50ec0.png').default}
              alt=""
              className={cn(section1Styles.img, section1Styles.img_layout40)}
            />
          </div>
        </div>
        <div className={section1Styles.flex__spacer8} />
        <div className={section1Styles.flex__item14}>
          <div className={cn(section1Styles.contain_block33, section1Styles.contain_block33_layout)}>
            <img
              src={require('assets/d48ee09f3161d0302037e5ad1f47c3ff.png').default}
              alt=""
              className={cn(section1Styles.img, section1Styles.img_layout41)}
            />
          </div>
        </div>
        <div className={section1Styles.flex__spacer9} />
        <div className={section1Styles.flex__item14}>
          <div className={cn(section1Styles.contain_block34, section1Styles.contain_block34_layout)}>
            <img
              src={require('assets/d0acb3844324a91ba25a9bb8a2e68fb4.png').default}
              alt=""
              className={cn(section1Styles.img, section1Styles.img_layout42)}
            />
          </div>
        </div>
        <div className={section1Styles.flex__spacer8} />
        <div className={section1Styles.flex__item14}>
          <div className={cn(section1Styles.contain_block35, section1Styles.contain_block35_layout)}>
            <div className={cn(section1Styles.group1, section1Styles.group1_layout3)}>
              <img
                src={require('assets/129fd404ba2750a548cda65b57899e63.png').default}
                alt=""
                className={cn(section1Styles.img, section1Styles.img_layout43)}
              />
            </div>
          </div>
        </div>
        <div className={section1Styles.flex__spacer8} />
        <div className={section1Styles.flex__item14}>
          <div className={cn(section1Styles.contain_block36, section1Styles.contain_block36_layout)}>
            <div className={cn(section1Styles.group1, section1Styles.group1_layout4)}>
              <img
                src={require('assets/0376ecf6a1ade93419a5f90dcf51f91a.png').default}
                alt=""
                className={cn(section1Styles.img, section1Styles.img_layout44)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={cn(section1Styles.flex, section1Styles.flex_layout9)}>
        <div className={section1Styles.flex__item15}>
          <div className={cn(section1Styles.group1, section1Styles.group1_layout6)}>
            <div
              style={{ '--src': `url(${require('assets/a26ea5c8cde15c8fb600b36ea83193ab.png').default})` }}
              className={cn(section1Styles.contain_block6, section1Styles.contain_block6_layout)}>
              <div className={cn(section1Styles.flex, section1Styles.flex_layout8)}>
                <div className={section1Styles.flex__item16}>
                  <div className={cn(section1Styles.flex1, section1Styles.flex1_layout6)}>
                    <div className={cn(section1Styles.txt13, section1Styles.txt13_layout)}>
                      Stage 1 has <br />
                      {'started!'}
                    </div>
                    <div className={cn(section1Styles.txt14, section1Styles.txt14_layout)}>1 BNB = 20000 BSCDAO</div>

                    <div
                      style={{ '--src': `url(${require('assets/d0ee8b5a5919d4f55bdabc219e5c88e7.png').default})` }}
                      className={cn(section1Styles.contain_block5, section1Styles.contain_block5_layout)}>
                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout5)}>
                        <div className={cn(section1Styles.txt15, section1Styles.txt15_layout)}>Coin marketcap data</div>
                        <div className={cn(section1Styles.txt16, section1Styles.txt16_layout)}>2.1 B</div>
                        <div className={cn(section1Styles.txt16, section1Styles.txt16_layout1)}>BSCDAO remaining</div>
                        <div className={cn(section1Styles.txt17, section1Styles.txt17_layout)}>
                          Until 1 BNB = 35000 BSCDAO
                        </div>
                        <div className={section1Styles.flex1__item}>
                          <div
                            style={{
                              '--src': `url(${require('assets/f17b2024bb3c0a8527a775cfd4d458b5.png').default})`
                            }}
                            className={cn(section1Styles.contain_block4, section1Styles.contain_block4_layout)}>
                            <div className={cn(section1Styles.txt18, section1Styles.txt18_layout)}>Connect wallet</div>
                          </div>
                        </div>
                        <div className={cn(section1Styles.txt19, section1Styles.txt19_layout)}>Offer code?</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={section1Styles.flex__spacer10} />
                <div className={section1Styles.flex__item17}>
                  <img
                    src={require('assets/b2d5b8d13fc613e4c0e0d5af741fbef2.png').default}
                    alt=""
                    className={cn(section1Styles.img, section1Styles.img_layout5)}
                  />
                </div>
                <div className={section1Styles.flex__spacer11} />
                <div className={section1Styles.flex__item18}>
                  <div className={cn(section1Styles.group1, section1Styles.group1_layout5)}>
                    <img
                      src={require('assets/80aac9dcceda6246988ca14e12803147.png').default}
                      alt=""
                      className={cn(section1Styles.image, section1Styles.image_layout)}
                    />
                  </div>
                </div>
                <div className={section1Styles.flex__spacer12} />
                <div className={section1Styles.flex__item19}>
                  <img
                    src={require('assets/051f3aaa800e19f325a7d2a039efb661.png').default}
                    alt=""
                    className={cn(section1Styles.img, section1Styles.img_layout45)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={section1Styles.flex__spacer13} />
        <div className={section1Styles.flex__item20}>
          <div
            style={{ '--src': `url(${require('assets/47fd319525441ffa762f2aaefa7e8ce4.png').default})` }}
            className={cn(section1Styles.contain_block39, section1Styles.contain_block39_layout)}>
            <div
              style={{ '--src': `url(${require('assets/0b94bb63ea9a47035d7616ad0fcae6e2.png').default})` }}
              className={cn(section1Styles.contain_block38, section1Styles.contain_block38_layout)}>
              <div
                style={{ '--src': `url(${require('assets/aed70da66cfb3c24539cfd0a5c92b35e.png').default})` }}
                className={cn(section1Styles.contain_block37, section1Styles.contain_block37_layout)}>
                <img
                  src={require('assets/247c27556cf15b76e0cb7fedf8bbf8d0.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout46)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(section1Styles.flex, section1Styles.flex_layout16)}>
        <div className={section1Styles.flex__item21}>
          <div className={cn(section1Styles.flex1, section1Styles.flex1_layout9)}>
            <div className={cn(section1Styles.flex1, section1Styles.flex1_layout7)}>
              <div className={cn(section1Styles.flex1, section1Styles.flex1_layout7)}>
                <div className={cn(section1Styles.txt20, section1Styles.txt20_layout)}>
                  Get in early on the BSCDAO Presale
                </div>
                <div className={cn(section1Styles.txt21, section1Styles.txt21_layout)}>
                  BSCDAO PROTOCOL will manage liquidity across BINANCE SMART <br />
                  {
                    'chains in order to increase capital efficiency and automatically provide its users with the highest possible yield on the assets they wish to deploy to liquidity pools.\r'
                  }
                  <br />
                  {
                    'We hope that our products will not only help our users but that they will also provide a valuable service to the cryptocurrency '
                  }
                  <br />
                  {'ecosystems as a whole.'}
                </div>
              </div>

              <div className={cn(section1Styles.flex1, section1Styles.flex1_layout8)}>
                <div className={cn(section1Styles.txt22, section1Styles.txt22_layout)}>
                  WELCOME TO BSCDAO PROTOCOL PRESALE
                </div>
                <div className={cn(section1Styles.txt21, section1Styles.txt21_layout1)}>
                  You can buy directly using your card, or can use USDT or BNB already in your wallet. After the public
                  presale ends, you'll be able to claim your purchased BSCDAO using the claim page.
                </div>
              </div>

              <div className={cn(section1Styles.flex, section1Styles.flex_layout10)}>
                <div className={section1Styles.flex__item22}>
                  <div
                    style={{ '--src': `url(${require('assets/f17b2024bb3c0a8527a775cfd4d458b5.png').default})` }}
                    className={cn(section1Styles.contain_block4, section1Styles.contain_block4_layout1)}>
                    <div className={cn(section1Styles.txt18, section1Styles.txt18_layout1)}>Home</div>
                  </div>
                </div>
                <div className={section1Styles.flex__spacer14} />
                <div className={section1Styles.flex__item22}>
                  <div
                    style={{ '--src': `url(${require('assets/f17b2024bb3c0a8527a775cfd4d458b5.png').default})` }}
                    className={cn(section1Styles.contain_block4, section1Styles.contain_block4_layout1)}>
                    <div className={cn(section1Styles.txt18, section1Styles.txt18_layout2)}>Whitepaper</div>
                  </div>
                </div>
                <div className={section1Styles.flex__spacer14} />
                <div className={section1Styles.flex__item23}>
                  <div
                    style={{ '--src': `url(${require('assets/4416f6cc81712a2ecfe8ba465c8736e5.png').default})` }}
                    className={cn(section1Styles.contain_block9, section1Styles.contain_block9_layout)}>
                    <div className={cn(section1Styles.txt18, section1Styles.txt18_layout3)}>Presale contract</div>
                  </div>
                </div>
                <div className={section1Styles.flex__spacer14} />
                <div className={section1Styles.flex__item24}>
                  <div
                    style={{ '--src': `url(${require('assets/7fbdbdf3bdcc7accd643ca4ec2404d5f.png').default})` }}
                    className={cn(section1Styles.contain_block10, section1Styles.contain_block10_layout)}>
                    <img
                      src={require('assets/eb25f9ac62d90fd9844f57ca0e97c9b2.png').default}
                      alt=""
                      className={cn(section1Styles.img, section1Styles.img_layout47)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={cn(section1Styles.flex, section1Styles.flex_layout11)}>
              <div className={section1Styles.flex__item25}>
                <img
                  src={require('assets/757d87c29a15ced72aae2fed24b6e427.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout48)}
                />
              </div>
              <div className={section1Styles.flex__spacer15} />
              <div className={section1Styles.flex__item26}>
                <img
                  src={require('assets/8abb4c781b79115b81e9e14c8acd6fac.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout49)}
                />
              </div>
              <div className={section1Styles.flex__spacer16} />
              <div className={section1Styles.flex__item27}>
                <img
                  src={require('assets/49b96b26175823e695fbb82409b9cb20.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout50)}
                />
              </div>
              <div className={section1Styles.flex__spacer15} />
              <div className={section1Styles.flex__item26}>
                <img
                  src={require('assets/8abb4c781b79115b81e9e14c8acd6fac.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout49)}
                />
              </div>
              <div className={section1Styles.flex__spacer16} />
              <div className={section1Styles.flex__item28}>
                <img
                  src={require('assets/545de000ca2d998f4bc94bd6f57e4c6b.png').default}
                  alt=""
                  className={cn(section1Styles.img, section1Styles.img_layout50)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={section1Styles.flex__spacer17} />
        <div className={section1Styles.flex__item29}>
          <div className={cn(section1Styles.contain_block27, section1Styles.contain_block27_layout)}>
            <div className={cn(section1Styles.flex1, section1Styles.flex1_layout24)}>
              <div className={cn(section1Styles.flex, section1Styles.flex_layout12)}>
                <div className={section1Styles.flex__item30}>
                  <div className={cn(section1Styles.group1, section1Styles.group1_layout6)}>
                    <div className={cn(section1Styles.contain_block11, section1Styles.contain_block11_layout)}>
                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout10)}>
                        <div className={cn(section1Styles.txt23, section1Styles.txt23_layout)}>0</div>
                        <div className={cn(section1Styles.txt24, section1Styles.txt24_layout)}>Days</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={section1Styles.flex__spacer18} />
                <div className={section1Styles.flex__item30}>
                  <div className={cn(section1Styles.contain_block12, section1Styles.contain_block12_layout)}>
                    <div className={cn(section1Styles.flex1, section1Styles.flex1_layout11)}>
                      <div className={cn(section1Styles.txt23, section1Styles.txt23_layout1)}>0</div>
                      <div className={cn(section1Styles.txt24, section1Styles.txt24_layout)}>Hours</div>
                    </div>
                  </div>
                </div>
                <div className={section1Styles.flex__spacer18} />
                <div className={section1Styles.flex__item30}>
                  <div className={cn(section1Styles.contain_block13, section1Styles.contain_block13_layout)}>
                    <div className={cn(section1Styles.flex1, section1Styles.flex1_layout12)}>
                      <div className={cn(section1Styles.txt23, section1Styles.txt23_layout2)}>0</div>
                      <div className={cn(section1Styles.txt24, section1Styles.txt24_layout)}>Minutes</div>
                    </div>
                  </div>
                </div>
                <div className={section1Styles.flex__spacer18} />
                <div className={section1Styles.flex__item30}>
                  <div className={cn(section1Styles.contain_block14, section1Styles.contain_block14_layout)}>
                    <div className={cn(section1Styles.flex1, section1Styles.flex1_layout13)}>
                      <div className={cn(section1Styles.txt23, section1Styles.txt23_layout3)}>0</div>
                      <div className={cn(section1Styles.txt24, section1Styles.txt24_layout)}>Seconds</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={section1Styles.flex1__item1}>
                <div className={cn(section1Styles.group2, section1Styles.group2_layout5)}>
                  <div className={cn(section1Styles.txt25, section1Styles.txt25_layout)}>Pre-sale info</div>
                  <hr size={1} className={cn(section1Styles.rect1, section1Styles.rect1_layout)} />
                  <hr size={1} className={cn(section1Styles.rect1, section1Styles.rect1_layout1)} />
                  <px-posize
                    area-style='{":before":{"content":"\" \"","display":"inline-block","height":"100%","verticalAlign":"middle"}}'
                    x="197fr 8px 375fr"
                    y="6px minmax(0px, max-content) 8px"
                    absolute>
                    <img
                      className={section1Styles.img}
                      src={require('assets/ab2b5b7afad5f8d25d6a7e23b328b4d6.png').default}
                      alt="Ellipse 810"
                    />
                  </px-posize>
                  <px-posize
                    area-style='{":before":{"content":"\" \"","display":"inline-block","height":"100%","verticalAlign":"middle"}}'
                    x="376fr 8px 196fr"
                    y="6px minmax(0px, max-content) 8px"
                    absolute>
                    <img
                      className={section1Styles.img}
                      src={require('assets/ab2b5b7afad5f8d25d6a7e23b328b4d6.png').default}
                      alt="Ellipse 811"
                    />
                  </px-posize>
                </div>
              </div>

              <div className={cn(section1Styles.flex1, section1Styles.flex1_layout19)}>
                <div className={cn(section1Styles.contain_block18, section1Styles.contain_block18_layout)}>
                  <div className={cn(section1Styles.flex1, section1Styles.flex1_layout14)}>
                    <div className={cn(section1Styles.txt12, section1Styles.txt12_layout1)}>Token price</div>
                    <div className={cn(section1Styles.txt26, section1Styles.txt26_layout)}>1 BNB = 6400 QUINT</div>
                  </div>
                </div>

                <div className={cn(section1Styles.flex, section1Styles.flex_layout13)}>
                  <div className={section1Styles.flex__item31}>
                    <div className={cn(section1Styles.contain_block19, section1Styles.contain_block19_layout)}>
                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout15)}>
                        <div className={cn(section1Styles.txt12, section1Styles.txt12_layout2)}>MIN PURCHASE</div>
                        <div className={cn(section1Styles.txt26, section1Styles.txt26_layout1)}>0.2 BNB</div>
                      </div>
                    </div>
                  </div>
                  <div className={section1Styles.flex__spacer19} />
                  <div className={section1Styles.flex__item31}>
                    <div className={cn(section1Styles.contain_block20, section1Styles.contain_block20_layout)}>
                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout16)}>
                        <div className={cn(section1Styles.txt12, section1Styles.txt12_layout2)}>MAX PURCHASE</div>
                        <div className={cn(section1Styles.txt26, section1Styles.txt26_layout2)}>10 BNB</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.flex, section1Styles.flex_layout13)}>
                  <div className={section1Styles.flex__item32}>
                    <div className={cn(section1Styles.contain_block21, section1Styles.contain_block21_layout)}>
                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout17)}>
                        <div className={cn(section1Styles.txt12, section1Styles.txt12_layout2)}>SOFT CAP</div>
                        <div className={cn(section1Styles.txt26, section1Styles.txt26_layout)}>2000 BNB</div>
                      </div>
                    </div>
                  </div>
                  <div className={section1Styles.flex__spacer20} />
                  <div className={section1Styles.flex__item32}>
                    <div className={cn(section1Styles.contain_block22, section1Styles.contain_block22_layout)}>
                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout18)}>
                        <div className={cn(section1Styles.txt12, section1Styles.txt12_layout3)}>HARD CAP</div>
                        <div className={cn(section1Styles.txt26, section1Styles.txt26_layout)}>10000 BNB</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.flex, section1Styles.flex_layout13)}>
                  <div className={section1Styles.flex__item33}>
                    <div className={cn(section1Styles.contain_block16, section1Styles.contain_block16_layout)}>
                      <div className={cn(section1Styles.txt27, section1Styles.txt27_layout)}>BNB AMOUNT - </div>
                    </div>
                  </div>
                  <div className={section1Styles.flex__spacer21} />
                  <div className={section1Styles.flex__item33}>
                    <div className={cn(section1Styles.contain_block16, section1Styles.contain_block16_layout)}>
                      <div className={cn(section1Styles.txt27, section1Styles.txt27_layout)}>Token amount - </div>
                    </div>
                  </div>
                </div>

                <div className={section1Styles.flex1__item2}>
                  <div
                    style={{ '--src': `url(${require('assets/f3adc09f8dd3d658749fe14352730261.png').default})` }}
                    className={cn(section1Styles.contain_block15, section1Styles.contain_block15_layout)}>
                    <div className={cn(section1Styles.txt18, section1Styles.txt18_layout4)}>Connect wallet</div>
                  </div>
                </div>
              </div>

              <hr size={1} className={cn(section1Styles.rect1, section1Styles.rect1_layout2)} />

              <div className={cn(section1Styles.flex1, section1Styles.flex1_layout23)}>
                <div className={cn(section1Styles.contain_block25, section1Styles.contain_block25_layout)}>
                  <div className={cn(section1Styles.flex1, section1Styles.flex1_layout20)}>
                    <div className={cn(section1Styles.txt28, section1Styles.txt28_layout)}>0</div>

                    <div className={cn(section1Styles.flex, section1Styles.flex_layout14)}>
                      <div className={section1Styles.flex__item34}>
                        <div className={cn(section1Styles.txt29, section1Styles.txt29_layout)}>Your investment</div>
                      </div>
                      <div className={section1Styles.flex__spacer22} />
                      <div className={section1Styles.flex__item35}>
                        <img
                          src={require('assets/0177949eb177866dfe65150a6c431435.png').default}
                          alt=""
                          className={cn(section1Styles.img, section1Styles.img_layout51)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.flex, section1Styles.flex_layout15)}>
                  <div className={section1Styles.flex__item36}>
                    <div className={cn(section1Styles.contain_block23, section1Styles.contain_block23_layout)}>
                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout21)}>
                        <div className={cn(section1Styles.txt30, section1Styles.txt30_layout)}>0</div>
                        <div className={cn(section1Styles.txt29, section1Styles.txt29_layout1)}>Your investment</div>
                      </div>
                    </div>
                  </div>
                  <div className={section1Styles.flex__spacer23} />
                  <div className={section1Styles.flex__item36}>
                    <div className={cn(section1Styles.contain_block24, section1Styles.contain_block24_layout)}>
                      <div className={cn(section1Styles.flex1, section1Styles.flex1_layout22)}>
                        <div className={cn(section1Styles.txt30, section1Styles.txt30_layout)}>0</div>
                        <div className={cn(section1Styles.txt29, section1Styles.txt29_layout1)}>Referral Earning</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={cn(section1Styles.txt25, section1Styles.txt25_layout1)}>Your token to claim: 0</div>
                <div className={section1Styles.flex1__item3}>
                  <div
                    style={{ '--src': `url(${require('assets/f3adc09f8dd3d658749fe14352730261.png').default})` }}
                    className={cn(section1Styles.contain_block15, section1Styles.contain_block15_layout1)}>
                    <div className={cn(section1Styles.txt18, section1Styles.txt18_layout5)}>Claim tokens</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cn(section1Styles.contain_block28, section1Styles.contain_block28_layout)}>
        <img
          src={require('assets/b01e7a8bbdc6e5b85b94bc400a87d06a.png').default}
          alt=""
          className={cn(section1Styles.img, section1Styles.img_layout52)}
        />

        <div className={cn(section1Styles.flex1, section1Styles.flex1_layout25)}>
          <div className={cn(section1Styles.txt31, section1Styles.txt31_layout)}>BNB Raised : 2000 BNB / 10000BNB</div>
          <div className={section1Styles.flex1__item4}>
            <div className={cn(section1Styles.group2, section1Styles.group2_layout6)}>
              <div className={cn(section1Styles.rect2, section1Styles.rect2_layout)} />
              <img
                src={require('assets/18e1d06539c8c8237ee524c2a255768e.png').default}
                alt=""
                className={cn(section1Styles.img1, section1Styles.img1_layout)}
              />
              <px-posize
                area-style='{":before":{"content":"\" \"","display":"inline-block","height":"100%","verticalAlign":"middle"}}'
                x="984fr 53px 653fr"
                y="0px minmax(0px, max-content) 0px"
                absolute>
                <img
                  className={section1Styles.img}
                  src={require('assets/a0458818a3141205c7b41f58be06064e.png').default}
                  alt="Group 48096303"
                />
              </px-posize>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page2(props) {
  return (
    <main className={cn('page2', styles.main, styles.main_layout)}>
      <div className={styles.main__item}>{renderSection1(props)}</div>
    </main>
  );
}

Page2.inStorybook = true;
